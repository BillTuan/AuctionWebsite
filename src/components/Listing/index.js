import React, { Component } from "react";
import { Segment, Form, Container, Dropdown, Image } from "semantic-ui-react";
import ImageUploader from "react-firebase-file-uploader";
import { Editor } from "@tinymce/tinymce-react";
import { connect } from "react-redux";
import * as action from "../../action";
import moment from "moment";
import axios from "axios";
import { firebase } from "../../utils";

const bidTime = [
  { key: 1, text: "1 day", value: 1 },
  { key: 2, text: "2 days", value: 2 },
  { key: 3, text: "3 days", value: 3 },
  { key: 4, text: "4 days", value: 4 },
  { key: 5, text: "5 days", value: 5 }
];
const imgList = [
  "img1",
  "img2",
  "img3",
  "img4",
  "img5",
  "img6",
  "img7",
  "img8"
];

class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      redirectURL: "/",
      name: "",
      description: "",
      start_time: "",
      end_time: "",
      bid_price: 0,
      bid_jump: 0,
      buy_price: 0,
      pictures: [],
      categories_products: [],
      bid_time: 0,
      categoriesOption: []
    };
    //this.onDrop = this.onDrop.bind(this);
  }

  componentWillMount() {
    const { productDetail } = this.props;
    if (this.props.editProduct) {
      console.log(productDetail);
      this.handleEditProduct(productDetail);
    }
  }
  componentDidMount() {
    this.props.getListCategory();
  }
  handleEditProduct = ({
    name,
    description,
    bid_price,
    buy_price,
    start_time,
    end_time
  }) => {
    const pictures = [];
    imgList.map(item => {
      pictures.push(this.props.productDetail[item]);
      return item;
    });
    const bid_time = moment(end_time).diff(moment(start_time), "days");
    console.log(bid_time);
    this.setState({
      name,
      description,
      bid_price,
      buy_price,
      pictures,
      bid_time
    });
  };
  handleEditorChange = e => {
    this.setState({
      description: e.target.getContent()
    });
  };

  handleUploadError = error => {
    console.error(error);
  };
  handleUploadSuccess = filename => {
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => {
        this.setState({
          pictures: [...this.state.pictures, url]
        });
      });
  };
  postProduct = async () => {
    //Product name, Description, List image, Bid time, List category.
    const {
      name,
      description,
      pictures,
      bid_time,
      categories_products
    } = this.state;
    //Start time = Now, End time = start time + bid time.
    const start_time = moment().format();
    const end_time = moment(start_time)
      .add(parseInt(bid_time, 10), "days")
      .format();
    //Bid price, buy price, bid jump = 10% of bid price.
    const bid_price = parseInt(this.state.bid_price, 10);
    const buy_price = parseInt(this.state.buy_price, 10);
    const bid_jump = parseInt(bid_price * 0.1, 10);
    //Create Object use for post request
    const object = {
      name,
      description,
      start_time,
      end_time,
      bid_price,
      bid_jump,
      buy_price,
      seller_id: 1,
      categories_products
    };
    console.log(object);
    console.log(this.props.productDetail.id);
    //Add image to object
    pictures.map((picture, index) => {
      object[`img${index + 1}`] = picture;
      return picture;
    });
    try {
      if (this.props.editProduct) {
        await axios.put(`/api/products/${this.props.productDetail.id}`, object);
      } else {
        const { data } = await axios.post("/api/products", object);
        this.props.history.push(`/product/${data.id}`);
      }
    } catch (error) {
      alert(error);
    }
  };
  componentWillReceiveProps(nextProps) {
    this.handleCategory(nextProps);
  }

  //Handle change event.
  handleNameChange = (e, { value }) =>
    this.setState({
      name: value
    });
  handleOnchange = (e, { value }) => {
    const categories_products = [];
    value.map(id => {
      categories_products.push({ id });
      return id;
    });
    this.setState({ categories_products });
  };
  handleBidPriceChange = (e, { value }) => {
    this.setState({ bid_price: value });
  };
  handleBuyPriceChange = (e, { value }) => {
    this.setState({ buy_price: value });
  };
  handleBidTimeChange = (e, { value }) => {
    this.setState({ bid_time: value });
  };
  handleCategory(props) {
    const categories = [];
    props.categories.map(({ id, name }) => {
      categories.push({
        key: id,
        text: name,
        value: id
      });
      return id;
    });
    this.setState({ categoriesOption: categories });
  }
  //----------------------------
  render() {
    return (
      <Container text>
        <Segment padded>
          <Form>
            <Form.Field>
              <Form.Input
                label="Product name"
                type="string"
                placeholder="Product name"
                value={this.state.name}
                onChange={this.handleNameChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Category</label>
              <Dropdown
                placeholder="Category"
                fluid
                multiple
                selection
                options={this.state.categoriesOption}
                onChange={this.handleOnchange}
              />
            </Form.Field>
            <Form.Field>
              <label>Product images</label>
              <Image.Group size="tiny">
                {this.state.pictures.map(item => {
                  return <Image src={item} />;
                })}
              </Image.Group>
              <ImageUploader
                multiple
                accept="image/*"
                name="image"
                randomizeFilename
                storageRef={firebase.storage().ref("images")}
                onUploadStart={() => {
                  this.setState({ pictures: [] });
                }}
                onUploadError={this.handleUploadError}
                onUploadSuccess={this.handleUploadSuccess}
              />
            </Form.Field>
            <Form.Field>
              <label>Description</label>
              <Editor
                initialValue={
                  this.props.editProduct
                    ? this.props.productDetail.description
                    : ""
                }
                init={{
                  plugins: "link image code",
                  toolbar:
                    "undo redo | bold italic | alignleft aligncenter alignright | code"
                }}
                onChange={this.handleEditorChange}
              />
            </Form.Field>
            <Form.Group widths="equal">
              <Form.Input
                label="Bid price"
                type="number"
                placeholder="Product bid price"
                value={this.state.bid_price}
                onChange={this.handleBidPriceChange}
              />
              <Form.Input
                label="Buy price"
                type="number"
                placeholder="Product buy price"
                value={this.state.buy_price}
                onChange={this.handleBuyPriceChange}
              />
              <Form.Field>
                <label>Bid time</label>
                <Dropdown
                  placeholder="Bid time"
                  selection
                  options={bidTime}
                  value={this.state.bid_time}
                  onChange={this.handleBidTimeChange}
                />
              </Form.Field>
            </Form.Group>
            <Form.Button
              positive
              fluid
              onClick={() => {
                this.postProduct();
              }}
            >
              List product
            </Form.Button>
          </Form>
        </Segment>
      </Container>
    );
  }
}

const mapStateToProps = ({ categoryReducer }) => {
  return {
    categories: categoryReducer.categories
  };
};

export default connect(mapStateToProps, action)(Listing);

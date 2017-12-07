import React, { Component } from "react";
import { Segment, Form, Container, Dropdown, Button } from "semantic-ui-react";
import ImageUploader from "react-firebase-file-uploader";
import { Editor } from "@tinymce/tinymce-react";
import firebase from "firebase";
import { connect } from "react-redux";
import * as action from "../../action";
import moment from "moment";
const config = {
  apiKey: "AIzaSyCH6R17nAY6ma0Tm3s-ojhyu-e2SlEiFa0",
  authDomain: "auctionwebsite-f8118.firebaseapp.com",
  databaseURL: "https://auctionwebsite-f8118.firebaseio.com",
  projectId: "auctionwebsite-f8118",
  storageBucket: "auctionwebsite-f8118.appspot.com",
  messagingSenderId: "324266589853"
};
firebase.initializeApp(config);

const bidTime = [
  { key: 1, text: "1 day", value: 1 },
  { key: 2, text: "2 days", value: 2 },
  { key: 3, text: "3 days", value: 3 },
  { key: 4, text: "4 days", value: 4 },
  { key: 5, text: "5 days", value: 5 }
];

class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      start_time: "",
      end_time: "",
      bid_price: 0,
      bid_jump: 0,
      buy_price: 0,
      pictures: [],
      categories: [],
      bid_time: 0,
      categoriesOption: []
    };
    //this.onDrop = this.onDrop.bind(this);
  }

  componentDidMount() {
    this.props.getListCategory();
  }

  handleEditorChange = e => {
    this.setState({ description: e.target.getContent() });
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

  //delete Image
  // deleteImage = () => {
  //   firebase
  //     .storage()
  //     .ref("images")
  //     .child(this.state.name)
  //     .delete()
  //     .then(() => {})
  //     .catch(e => {
  //       console.log(e);
  //     });
  // };
  showObject = () => {
    const {
      name,
      description,
      bid_price,
      buy_price,
      pictures,
      bid_time
    } = this.state;
    const start_time = moment().format();
    const end_time = moment(start_time)
      .add(bid_time, "days")
      .format();
    const bid_jump = bid_price * 0.1;
    const object = {
      name,
      description,
      start_time,
      end_time,
      bid_price,
      bid_jump,
      buy_price,
      seller_id: 1,
      pictures,
      categories_products: this.state.categories
    };
    console.log(object);
  };
  componentWillReceiveProps(nextProps) {
    this.handleCategory(nextProps);
  }

  handleNameChange = (e, { value }) =>
    this.setState({
      name: value
    });
  handleOnchange = (e, { value }) => {
    const categories = [];
    value.map(id => {
      categories.push({ id });
    });
    this.setState({ categories });
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
    });
    this.setState({ categoriesOption: categories });
  }
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
              <ImageUploader
                multiple
                accept="image/*"
                name="image"
                randomizeFilename
                storageRef={firebase.storage().ref("images")}
                onUploadError={this.handleUploadError}
                onUploadSuccess={this.handleUploadSuccess}
              />
            </Form.Field>
            <Form.Field>
              <label>Description</label>
              <Editor
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
                  onChange={this.handleBidTimeChange}
                />
              </Form.Field>
            </Form.Group>
            <Form.Button
              positive
              fluid
              onClick={() => {
                this.showObject();
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

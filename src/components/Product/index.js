import React, { Component } from "react";
import {
  Grid,
  Container,
  Segment,
  Header,
  Divider,
  Button,
  Label,
  List
} from "semantic-ui-react";
import Slideshow from "./Slideshow";
import moment from "moment";
import Timer from "./Timer";
import InputPrice from "./InputPrice";
import MenuInfo from "./MenuInfo";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as action from "../../action";
import NumberFormat from "../NumberFormat";

class Product extends Component {
  state = { images: [], currentPrice: 0 };
  componentDidMount() {
    this.props.getProduct(this.props.match.params.id);
    this.props.getBidHistory(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    this.handleImage(newProps);

    if (newProps.bidHistory.length !== 0) {
      const currentPrice = newProps.bidHistory.reduce((a, b) =>
        Math.max(a.currentPrice, b.currentPrice)
      );
      this.setState({ currentPrice });
    } else {
      this.setState({ currentPrice: newProps.product.bid_price });
    }
  }
  handleImage(newProps) {
    const images = [];
    const { img1, img2, img3, img4, img5, img6, img7, img8 } = newProps.product;
    images.push(
      { original: img1, thumbnail: img1 },
      { original: img2, thumbnail: img2 },
      { original: img3, thumbnail: img3 },
      { original: img4, thumbnail: img4 },
      { original: img5, thumbnail: img5 },
      { original: img6, thumbnail: img6 },
      { original: img7, thumbnail: img7 },
      { original: img8, thumbnail: img8 }
    );
    this.setState({
      images: images
    });
  }
  render() {
    const {
      seller,
      name,
      description,
      start_time,
      end_time,
      bid_price,
      buy_price,
      bid_jump,
      categories
    } = this.props.product;
    const duration = moment(end_time).valueOf() - moment(start_time).valueOf();
    const endTime = moment(end_time).format("MMMM Do YYYY, h:mm:ss a");
    const sellerName = seller === undefined ? "" : seller.name;
    const listCategories = categories === undefined ? [] : categories;
    const { currentPrice } = this.state;
    return (
      <Container>
        <Segment.Group>
          <Grid columns={2} padded>
            {/* LEFT */}
            <Grid.Column>
              <Segment>
                {/* Header */}
                <Grid>
                  <Grid.Column floated="left" width={10}>
                    <Header size="large">
                      {name} - <Link to="">[{sellerName}]</Link>
                    </Header>
                  </Grid.Column>
                  <Grid.Column floated="right" width={5}>
                    <Segment circular style={{ width: 120, height: 120 }}>
                      <Header as="h3">
                        Start from
                        <Header.Subheader>
                          <NumberFormat value={bid_price} />
                        </Header.Subheader>
                      </Header>
                    </Segment>
                  </Grid.Column>
                </Grid>
                <Button size="big" color="blue">
                  BUY NOW: <NumberFormat value={buy_price} />
                </Button>
                <Divider section />
                {/* Information */}
                <Label
                  as="a"
                  color="teal"
                  ribbon="left"
                  style={{ width: 280, fontSize: 18 }}
                >
                  Categories
                </Label>
                <p>
                  {listCategories.map(({ id, name }) => (
                    <List as="ul" key={id}>
                      <List.Item as="li">{name}</List.Item>
                    </List>
                  ))}
                </p>
                <Label
                  as="a"
                  color="teal"
                  ribbon="left"
                  style={{ width: 280, fontSize: 18 }}
                >
                  End time: {endTime}
                </Label>
                <div>
                  {duration === 0 ? null : <Timer duration={duration} />}
                </div>

                <Label
                  as="a"
                  color="red"
                  tag
                  style={{
                    width: 150,
                    marginLeft: -5,
                    marginBottom: 10,
                    marginTop: 20,
                    fontSize: 16
                  }}
                >
                  Current bid: <NumberFormat value={currentPrice} />
                </Label>
                <div style={{ margin: 10 }}>
                  <InputPrice value={currentPrice} step={bid_jump} />
                </div>

                <div style={{ margin: 10 }}>
                  <Button size="large" positive>
                    Bid
                  </Button>
                </div>
              </Segment>
            </Grid.Column>
            {/* RIGHT */}
            <Grid.Column>
              <Slideshow images={this.state.images} />
            </Grid.Column>
          </Grid>
        </Segment.Group>

        {/* Menu information */}
        <Segment>
          <MenuInfo description={description} />
        </Segment>
      </Container>
    );
  }
}

const mapStateToProps = ({ productReducer }) => ({
  product: productReducer.product,
  bidHistory: productReducer.bidHistory
});
export default connect(mapStateToProps, action)(Product);

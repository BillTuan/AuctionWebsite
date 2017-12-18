import React, { Component } from "react";
import { Card, Image, Label, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as action from "../../action";

import moment from "moment";
import Timer from "../Product/Timer";
import NumberFormat from "../NumberFormat";
class CardProduct extends Component {
  state = { buttonColor: "orange", like: false };

  handleLike() {
    if (!this.state.like) {
      this.setState({ like: true });
      this.props.likeItem(this.props.product.id);
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      like: nextProps.product.like
    });
  }
  render() {
    const {
      id,
      name,
      description,
      bid_price,
      start_time,
      end_time,
      img1
    } = this.props.product;
    const duration = moment(end_time).valueOf() - moment(start_time).valueOf();
    const linkProduct = `/product/${id}`;
    return (
      <Card>
        <Label
          as="a"
          color="teal"
          ribbon="right"
          style={{ marginLeft: -13, width: 280 }}
        >
          <Timer duration={duration} />
        </Label>
        <Image src={img1} />

        <Card.Content>
          <Label
            as="a"
            color="red"
            tag
            style={{ width: 150, marginLeft: -5, marginBottom: 10 }}
          >
            Start price: <NumberFormat value={bid_price} />
          </Label>
          <Card.Header>{name}</Card.Header>
          <Card.Description>{description.substring(0, 100)}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link to={linkProduct}>
            <Button
              color={this.state.buttonColor}
              onMouseEnter={() => this.setState({ buttonColor: "green" })}
              onMouseLeave={() =>
                this.setState({
                  buttonColor: "orange"
                })
              }
            >
              SUBMIT A BID
            </Button>
          </Link>
          <Button
            color={this.state.like ? "red" : "grey"}
            content="Like"
            icon="heart"
            onClick={() => this.handleLike()}
            floated="right"
          />
        </Card.Content>
      </Card>
    );
  }
}
export default connect(() => ({}), action)(CardProduct);

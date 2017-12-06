import React, { Component } from "react";
import { Card, Image, Icon, Segment, Label, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import moment from "moment";
import Timer from "../Product/Timer";

class CardProduct extends Component {
  state = { buttonColor: "orange" };
  render() {
    const {
      id,
      name,
      description,
      bid_price,
      start_time,
      end_time
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
        <Image src="https://i.pinimg.com/736x/54/4f/13/544f13dd463f73b5e954e8d0ff279a4f--anime-couples-avatar.jpg" />

        <Card.Content>
          <Label
            as="a"
            color="red"
            tag
            style={{ width: 150, marginLeft: -5, marginBottom: 10 }}
          >
            Start price: ${bid_price}
          </Label>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
            <span className="date">Current price: $30</span>
          </Card.Meta>
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
        </Card.Content>
      </Card>
    );
  }
}

export default CardProduct;

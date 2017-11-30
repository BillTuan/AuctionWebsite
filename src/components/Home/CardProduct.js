import React, { Component } from "react";
import { Card, Image, Icon, Segment, Label, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import moment from "moment";

class CardProduct extends Component {
  state = {
    time: moment().format("LTS"),
    buttonColor: "orange"
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({ time: moment().format("LTS") });
    }, 1000);
  }
  render() {
    return (
      <Card>
        <Label
          as="a"
          color="teal"
          ribbon="right"
          style={{ marginLeft: -13, width: 280 }}
        >
          {this.state.time}
        </Label>
        <Image src="https://i.pinimg.com/736x/54/4f/13/544f13dd463f73b5e954e8d0ff279a4f--anime-couples-avatar.jpg" />

        <Card.Content>
          <Label
            as="a"
            color="red"
            tag
            style={{ width: 150, marginLeft: -5, marginBottom: 10 }}
          >
            Start price: $55
          </Label>
          <Card.Header>Matthew</Card.Header>
          <Card.Meta>
            <span className="date">Current price: $30</span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link to="/product/1">
            <Button
              color={this.state.buttonColor}
              onMouseEnter={() => this.setState({ buttonColor: "green" })}
              onMouseLeave={() =>
                this.setState({
                  buttonColor: "orange"
                })}
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

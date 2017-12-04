import React, { Component } from "react";
import {
  Grid,
  Image,
  Container,
  Segment,
  Header,
  Divider,
  Button,
  Menu,
  Label,
  Tab
} from "semantic-ui-react";
import Slideshow from "./Slideshow";
import moment from "moment";
import NumericInput from "react-numeric-input";
import { setInterval } from "core-js/library/web/timers";

const data = {
  name: "SWATCH WOMEN’S QUARTZ RAINBOW DIAL PLASTIC WATCH AUCTION",
  time: "July 30, 2019 12:00 am",
  currentBid: 551.0,
  des: `Quartz movement
        Case diameter: 33 mm
        Casual watch
        Plastic
        Water-resistant to 30 M (99 feet)`,
  images: [
    {
      original: "http://zooms.gr/wp-content/uploads/2017/11/testProduct.png",
      thumbnail: "http://zooms.gr/wp-content/uploads/2017/11/testProduct.png"
    },
    {
      original: "http://zooms.gr/wp-content/uploads/2017/11/testProduct.png",
      thumbnail: "http://zooms.gr/wp-content/uploads/2017/11/testProduct.png"
    },
    {
      original: "http://zooms.gr/wp-content/uploads/2017/11/testProduct.png",
      thumbnail: "http://zooms.gr/wp-content/uploads/2017/11/testProduct.png"
    }
  ]
};

const InputPrice = props => {
  return (
    <NumericInput
      value={props.value}
      precision={2}
      size={6}
      step={0.1}
      mobile={false}
      style={{
        wrap: {
          background: "#E2E2E2",
          boxShadow: "0 0 1px 1px #fff inset, 1px 1px 5px -1px #000",
          padding: "2px 2.26ex 2px 2px",
          borderRadius: "6px 3px 3px 6px",
          fontSize: 32
        },
        input: {
          borderRadius: "4px 2px 2px 4px",
          color: "#988869",
          padding: "0.1ex 1ex",
          border: "1px solid #ccc",
          marginRight: 4,
          display: "block",
          fontWeight: 100
        },
        "input:focus": {
          border: "1px inset #69C",
          outline: "none"
        },
        arrowUp: {
          borderBottomColor: "rgba(66, 54, 0, 0.63)"
        },
        arrowDown: {
          borderTopColor: "rgba(66, 54, 0, 0.63)"
        }
      }}
    />
  );
};
const panes = [
  {
    menuItem: { key: "details", icon: "info", content: "Description" },
    render: () => <Tab.Pane>Tab 1 Content</Tab.Pane>
  },
  {
    menuItem: (
      <Menu.Item key="auction">
        Auction History<Label>15</Label>
      </Menu.Item>
    ),
    render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>
  },
  {
    menuItem: (
      <Menu.Item key="review">
        Reviews<Label>8</Label>
      </Menu.Item>
    ),
    render: () => <Tab.Pane>Tab 1 Content</Tab.Pane>
  }
];

const MenuInfo = () => <Tab panes={panes} />;

class Product extends Component {
  state = { time: moment().format("LTS") };

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: moment().format("LTS") });
    }, 1000);
  }
  render() {
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
                    <Header size="large">{data.name}</Header>
                  </Grid.Column>
                  <Grid.Column floated="right" width={5}>
                    <Segment circular style={{ width: 120, height: 120 }}>
                      <Header as="h3">
                        Current Bid
                        <Header.Subheader>${data.currentBid}</Header.Subheader>
                      </Header>
                    </Segment>
                  </Grid.Column>
                </Grid>
                <Divider section />
                {/* Information */}
                <div>Details: {data.des}</div>
                <div>End at: {data.time}</div>
                <div>Time left {this.state.time}</div>
                <div>Current bid: ${data.currentBid}</div>
                <InputPrice value={data.currentBid} />
                <Button basic color="red">
                  Bid
                </Button>
              </Segment>
            </Grid.Column>
            {/* RIGHT */}
            <Grid.Column>
              <Slideshow images={data.images} />
            </Grid.Column>
          </Grid>
        </Segment.Group>

        {/* Menu information */}
        <Segment>
          <MenuInfo />
        </Segment>
      </Container>
    );
  }
}
export default Product;

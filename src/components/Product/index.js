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
import Timer from "./Timer";
import { setInterval } from "core-js/library/web/timers";
import InputPrice from "./InputPrice";
import MenuInfo from "./MenuInfo";

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

class Product extends Component {
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
                <Label
                  as="a"
                  color="teal"
                  ribbon="left"
                  style={{ width: 280, fontSize: 18 }}
                >
                  General
                </Label>
                <p>Details: {data.des}</p>
                <Label
                  as="a"
                  color="teal"
                  ribbon="left"
                  style={{ width: 280, fontSize: 18 }}
                >
                  End time: {data.time}
                </Label>
                <div>
                  <Timer duration={2 * 86400} />
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
                  Current bid: ${data.currentBid}
                </Label>
                <div style={{ margin: 10 }}>
                  <InputPrice value={data.currentBid} />
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

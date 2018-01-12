import React, { Component } from "react";
import {
  Segment,
  Grid,
  Button,
  Form,
  Table,
  Icon,
  Image,
  Message
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import moment from "moment";
import parser from "react-html-parser";

import ModalForm from "./ModalForm";
import NumberFormat from "../NumberFormat";
import * as action from "../../action";
class Detail extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    address: "",
    image: "",
    onChange: false,
    disableButton: true
  };
  componentWillMount() {
    const { name, email, phone, address, image } = this.props.data;
    this.setState({ name, email, phone, address, image });
  }
  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
    this.setState({ onChange: true, disableButton: false });
  };
  handleUpdate = () => {
    const { name, email, phone, address, image } = this.state;
    const newData = { ...this.props.data, name, email, phone, address, image };
    this.props.updateProfile(newData);
    this.setState({ onChange: false });
  };
  render() {
    const { name, email, phone, address } = this.state;
    return (
      <Grid.Column stretched width={12}>
        {this.state.onChange ? (
          <Message negative>
            <Message.Header>You have changed something</Message.Header>
            <p>Be careful when press Update</p>
          </Message>
        ) : null}
        <Image
          src="https://community.yellowfinbi.com/public/avatars/default-avatar.svg"
          size="small"
          circular
          centered
        />
        <Segment>
          <Form>
            <Form.Group unstackable widths={2}>
              <Form.Input
                label="Name"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
              <Form.Input
                label="Email"
                readOnly
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group widths={2}>
              <Form.Input
                label="Address"
                name="address"
                value={address}
                onChange={this.handleChange}
              />
              <Form.Input
                label="Phone"
                name="phone"
                type="number"
                value={phone}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button
              disabled={this.state.disableButton}
              positive
              floated="right"
              onClick={() => this.handleUpdate()}
            >
              Update
            </Button>
          </Form>
        </Segment>
      </Grid.Column>
    );
  }
}
const ProfileDetail = connect(({ userReducer, authReducer }) => {
  return { data: authReducer.data.data, status: userReducer.status };
}, action)(Detail);

const SaleHistory = connect(
  ({ userReducer, authReducer }) => ({
    productsPosted: userReducer.productsPosted,
    headers: authReducer.headers
  }),
  action
)(props => {
  const { productsPosted, headers } = props;
  return (
    <Grid.Column stretched width={12}>
      <Segment>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Image</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>End time</Table.HeaderCell>
              <Table.HeaderCell>Bid Price</Table.HeaderCell>
              <Table.HeaderCell>Buy Price</Table.HeaderCell>
              <Table.HeaderCell />
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {productsPosted.map(item => {
              const {
                id,
                name,
                description,
                end_time,
                bid_price,
                buy_price,
                img1
              } = item;
              const endTime = moment(end_time).format(
                "MMMM Do YYYY, h:mm:ss a"
              );
              return (
                <Table.Row key={id}>
                  <Table.Cell>
                    <Image src={img1} size="small" />
                  </Table.Cell>
                  <Table.Cell>
                    <Link to={`/product/${id}`}>{name}</Link>
                  </Table.Cell>
                  <Table.Cell>{parser(description)}</Table.Cell>
                  <Table.Cell>{endTime}</Table.Cell>
                  <Table.Cell>
                    <NumberFormat value={bid_price} />
                  </Table.Cell>
                  <Table.Cell>
                    <NumberFormat value={buy_price} />
                  </Table.Cell>
                  <Table.Cell>
                    <ModalForm item={item} />
                    <Button
                      color="red"
                      onClick={async () => {
                        try {
                          item.status = 2;
                          const { data } = await axios({
                            method: "PUT",
                            url: `/api/products/${id}`,
                            headers,
                            data: item
                          });
                          props.getListPostedItem();
                          console.log("DATA", data);
                        } catch (error) {
                          console.log(error);
                        }
                      }}
                    >
                      Unlist
                    </Button>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </Segment>
    </Grid.Column>
  );
});
const Completed = connect(({ userReducer }) => ({
  winProduct: userReducer.winProduct
}))(props => {
  return (
    <Grid.Column stretched width={12}>
      <Segment>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Auction name</Table.HeaderCell>
              <Table.HeaderCell>Win price</Table.HeaderCell>
              <Table.HeaderCell>End time</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {props.winProduct.map(({ id, name, bid_price, end_time }) => {
              const endTime = moment(end_time).format(
                "MMMM Do YYYY, h:mm:ss a"
              );
              return (
                <Table.Row key={id}>
                  <Table.Cell>
                    <Link to={`/product/${id}`}>{name}</Link>
                  </Table.Cell>
                  <Table.Cell>
                    <NumberFormat value={bid_price} />
                  </Table.Cell>
                  <Table.Cell>{endTime}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </Segment>
    </Grid.Column>
  );
});
const Participating = connect(({ userReducer }) => ({
  participating: userReducer.participating
}))(props => {
  return (
    <Grid.Column stretched width={12}>
      <Segment>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Auction name</Table.HeaderCell>
              <Table.HeaderCell>End time</Table.HeaderCell>
              <Table.HeaderCell>Current Bid</Table.HeaderCell>
              <Table.HeaderCell>Your Bid</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {props.participating.map(
              ({ id, end_time, bid_price, name, win }) => {
                const endTime = moment(end_time).format(
                  "MMMM Do YYYY, h:mm:ss a"
                );
                return (
                  <Table.Row key={id}>
                    <Table.Cell>
                      <Link to={`/product/${id}`}>{name}</Link>
                    </Table.Cell>
                    <Table.Cell>{endTime}</Table.Cell>
                    <Table.Cell>
                      <NumberFormat value={bid_price} />
                    </Table.Cell>
                    <Table.Cell>
                      {win === true ? (
                        <Icon color="green" name="smile" size="large" />
                      ) : null}
                    </Table.Cell>
                  </Table.Row>
                );
              }
            )}
          </Table.Body>
        </Table>
      </Segment>
    </Grid.Column>
  );
});
const WatchProduct = props => {
  const { watchProduct } = props;
  return (
    <Grid.Column stretched width={12}>
      <Segment>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Product</Table.HeaderCell>
              <Table.HeaderCell>Bid Price</Table.HeaderCell>
              <Table.HeaderCell>End time</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {watchProduct.map(({ id, name, bid_price, end_time }) => {
              const endTime = moment(end_time).format(
                "MMMM Do YYYY, h:mm:ss a"
              );

              return (
                <Table.Row key={id}>
                  <Table.Cell>
                    <Link to={`/product/${id}`}>{name}</Link>
                  </Table.Cell>
                  <Table.Cell>
                    <NumberFormat value={bid_price} />
                  </Table.Cell>
                  <Table.Cell>{endTime}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </Segment>
    </Grid.Column>
  );
};
const WatchItem = connect(({ userReducer }) => {
  return { watchProduct: userReducer.watchProduct };
}, {})(WatchProduct);
export const ContentList = {
  Profile: <ProfileDetail />,
  Completed: <Completed />,
  Participating: <Participating />,
  WatchProduct: <WatchItem />,
  SaleHistory: <SaleHistory />
};

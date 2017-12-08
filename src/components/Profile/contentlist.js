import React, { Component } from "react";
import {
  Container,
  Segment,
  Grid,
  Menu,
  Divider,
  Button,
  Form,
  Table,
  Icon
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { data, getData } from "./data";
import { connect } from "react-redux";
import moment from "moment";

const ProfileDetail = () => {
  return (
    <Grid.Column stretched width={12}>
      <Segment>
        <Form>
          <Form.Group unstackable widths={2}>
            <Form.Input label="Name" value={data.name} />
            <Form.Input label="Email" value={data.email} />
          </Form.Group>
          <Form.Group widths={2}>
            <Form.Input label="Address" value={data.address} />
            <Form.Input label="Phone" value={data.phone} />
          </Form.Group>
          <Button positive floated="right">
            Update
          </Button>
        </Form>
      </Segment>
    </Grid.Column>
  );
};
const Credit = () => {
  return (
    <Grid.Column stretched width={12}>
      <Segment>
        <Form>
          <Form.Input label="Credit" value={data.credit} />
          <Button positive floated="right">
            Update
          </Button>
        </Form>
      </Segment>
    </Grid.Column>
  );
};
const Completed = () => {
  getData();

  return (
    <Grid.Column stretched width={12}>
      <Segment>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Auction name</Table.HeaderCell>
              <Table.HeaderCell>Win price</Table.HeaderCell>
              <Table.HeaderCell>You win</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data.completedAuction.map(item => {
              return (
                <Table.Row>
                  <Table.Cell>{item.name}</Table.Cell>
                  <Table.Cell>{item.price}</Table.Cell>
                  <Table.Cell>
                    {item.isWinner ? (
                      <Icon color="green" name="winner" size="large" />
                    ) : null}
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </Segment>
    </Grid.Column>
  );
};
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
                    <Table.Cell>{bid_price}</Table.Cell>
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
                  <Table.Cell>{bid_price}</Table.Cell>
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
  Credit: <Credit />,
  Completed: <Completed />,
  Participating: <Participating />,
  WatchProduct: <WatchItem />
};

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
import { data, getData } from "./data";

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
const Participating = () => {
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
            {data.participatingAuction.map(item => {
              return (
                <Table.Row>
                  <Table.Cell>
                    <a>{item.name}</a>
                  </Table.Cell>
                  <Table.Cell>{item.endTime}</Table.Cell>
                  <Table.Cell>{item.currentBid}</Table.Cell>
                  <Table.Cell>
                    {item.yourBid >= item.currentBid ? (
                      <Icon color="green" name="smile" size="large" />
                    ) : (
                      item.yourBid
                    )}
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
const WatchProduct = () => {
  return (
    <Grid.Column stretched width={12}>
      <Segment>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Product</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
              <Table.HeaderCell>End time</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data.watchProduct.map(item => {
              return (
                <Table.Row>
                  <Table.Cell>{item.name}</Table.Cell>
                  <Table.Cell>{item.price}</Table.Cell>
                  <Table.Cell>{item.endTime}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </Segment>
    </Grid.Column>
  );
};
export const ContentList = {
  Profile: <ProfileDetail />,
  Credit: <Credit />,
  Completed: <Completed />,
  Participating: <Participating />,
  WatchProduct: <WatchProduct />
};

import React, { Component } from "react";
import { Tab, Menu, Table } from "semantic-ui-react";
import { connect } from "react-redux";
import * as action from "../../action";
import parser from "react-html-parser";
import moment from "moment";
import NumberFormat from "../NumberFormat";

const panes = [
  {
    menuItem: { key: "details", icon: "info", content: "Description" },
    render: props => <Tab.Pane>{parser(props.description)}</Tab.Pane>
  },
  {
    menuItem: <Menu.Item key="auction">Auction History</Menu.Item>,
    render: props => (
      <Tab.Pane>
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Bidder</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
              <Table.HeaderCell>Time</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {props.bidHistory.length === 0 ? (
              <Table.Cell colSpan="3">No one bid yet</Table.Cell>
            ) : (
              props.bidHistory.map(
                ({ Bidder, currentPrice, created_at }, index) => {
                  const createdAt = moment(created_at).format(
                    "MMMM Do YYYY, h:mm:ss a"
                  );
                  return (
                    <Table.Row key={index}>
                      <Table.Cell>{Bidder.name}</Table.Cell>
                      <Table.Cell>
                        <NumberFormat value={currentPrice} />
                      </Table.Cell>
                      <Table.Cell>{createdAt}</Table.Cell>
                    </Table.Row>
                  );
                }
              )
            )}
          </Table.Body>
        </Table>
      </Tab.Pane>
    )
  }
];

const MenuInfo = props => (
  <Tab
    panes={panes}
    description={props.description}
    bidHistory={props.bidHistory}
  />
);

const mapStateToProps = ({ productReducer }) => ({
  bidHistory: productReducer.bidHistory
});

export default connect(mapStateToProps, action)(MenuInfo);

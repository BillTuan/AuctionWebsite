import React, { Component } from "react";
import { Grid, Segment, Table, Icon, Button, Confirm } from "semantic-ui-react";

import { data } from "./data"; //data fetched

const { users } = data;

class ListUser extends Component {
  state = { open: false };
  handleCancel = () => {
    this.setState({ open: false });
  };
  handleOK = () => {
    //do something
    this.setState({ open: false });
  };
  render() {
    return (
      <Grid.Column width={12}>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>
                <Icon name="ban" />
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {users.map(user => {
              return (
                <Table.Row>
                  <Table.Cell>{user.name}</Table.Cell>
                  <Table.Cell>{user.mail}</Table.Cell>
                  <Table.Cell>
                    <Button
                      negative
                      onClick={() => {
                        this.setState({ open: true });
                      }}
                    >
                      Ban
                    </Button>
                    <Confirm
                      open={this.state.open}
                      cancelButton="No"
                      confirmButton="Yes"
                      onCancel={this.handleCancel}
                      onConfirm={this.handleOK}
                    />
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </Grid.Column>
    );
  }
}

export default ListUser;

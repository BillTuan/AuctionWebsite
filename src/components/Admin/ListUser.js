import React, { Component } from "react";
import { Grid, Table, Icon, Button, Confirm } from "semantic-ui-react";
import * as action from "../../action";
import { connect } from "react-redux";
class ListUser extends Component {
  state = { open: false };
  handleCancel = () => {
    this.setState({ open: false });
  };
  handleOK = () => {
    //do something
    this.setState({ open: false });
  };
  componentDidMount() {
    this.props.getListUser();
  }
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
            {this.props.users.map(user => {
              return (
                <Table.Row>
                  <Table.Cell>{user.name}</Table.Cell>
                  <Table.Cell>{user.email}</Table.Cell>
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
const mapStateToProps = ({ userReducer }) => {
  return {
    users: userReducer.allUser
  };
};
export default connect(mapStateToProps, action)(ListUser);

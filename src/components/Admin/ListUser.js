import React, { Component } from "react";
import { Grid, Table, Icon, Button, Confirm } from "semantic-ui-react";
import axios from "axios";
import * as action from "../../action";
import { connect } from "react-redux";
class ListUser extends Component {
  state = {};
  handleCancel = () => {};
  handleOK = async (id, status) => {
    console.log("====================================");
    console.log(id);
    console.log("====================================");
    const { data } = await axios({
      url: `/api/admin/users/${id}`,
      method: "PUT",
      data: { status: status === 3 ? 1 : 3 }
    });
    this.props.getListUser();
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
            {this.props.users.map(({ name, email, id, status }) => {
              return (
                <Table.Row>
                  <Table.Cell>{name}</Table.Cell>
                  <Table.Cell>{email}</Table.Cell>
                  <Table.Cell>
                    <Button
                      negative={status !== 3}
                      positive={status === 3}
                      onClick={() => this.handleOK(id, status)}
                    >
                      {status === 3 ? "Un-Ban" : "Ban"}
                    </Button>
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

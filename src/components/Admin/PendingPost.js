import React, { Component } from "react";
import {
  Container,
  Table,
  Button,
  Divider,
  Image,
  Confirm,
  Modal,
  Form,
  TextArea,
  Grid
} from "semantic-ui-react";

import { data } from "./data"; // Data fetch
class PendingPost extends Component {
  state = { openApproveConfirm: false, openDenyConfirm: false };
  //Approve---------------------
  showApproveConfirm = () => {
    this.setState({ openApproveConfirm: true });
  };
  approvehandleCancel = () => {
    this.setState({ openApproveConfirm: false });
  };
  approvehandleConfirm = () => {
    //do something
    this.setState({ openApproveConfirm: false });
  };
  //Deny-------------------------
  denyhandleCancel = () => {
    this.setState({ openDenyConfirm: false });
  };
  denyhandleConfirm = () => {
    //do something
    this.setState({ openDenyConfirm: false });
  };
  render() {
    return (
      <Grid.Column width={12}>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Product name</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Seller ID</Table.HeaderCell>
              <Table.HeaderCell>Image</Table.HeaderCell>
              <Table.HeaderCell />
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data.pendingProduct.map(item => {
              return (
                <Table.Row>
                  <Table.Cell>{item.name}</Table.Cell>
                  <Table.Cell>{item.description}</Table.Cell>
                  <Table.Cell>{item.userID}</Table.Cell>
                  <Table.Cell>
                    <Image src={item.img} size="small" />
                  </Table.Cell>
                  <Table.Cell collapsing>
                    {/* Approve confirm */}
                    <Confirm
                      open={this.state.openApproveConfirm}
                      cancelButton="No"
                      confirmButton="Yes"
                      onCancel={this.approvehandleCancel}
                      onConfirm={this.approvehandleConfirm}
                    />
                    <Button
                      positive
                      onClick={() => {
                        this.showApproveConfirm();
                      }}
                    >
                      Approve
                    </Button>
                    {/* This will show when Approve button clicked */}
                    {/* Deny confirm */}
                    <Modal
                      trigger={
                        <Button
                          negative
                          onClick={() => {
                            this.setState({
                              openDenyConfirm: true
                            });
                          }}
                        >
                          Deny
                        </Button>
                      }
                      open={this.state.openDenyConfirm}
                    >
                      <Modal.Header>Please type a reason below</Modal.Header>
                      <Modal.Content>
                        <div>
                          <Form>
                            <TextArea placeholder="Tell me why" />
                          </Form>
                        </div>
                      </Modal.Content>
                      <Modal.Actions>
                        <Button
                          onClick={() => {
                            this.denyhandleCancel();
                          }}
                        >
                          No
                        </Button>
                        <Button
                          primary
                          onClick={() => {
                            this.denyhandleConfirm();
                          }}
                        >
                          Yes
                        </Button>
                      </Modal.Actions>
                    </Modal>
                    {/* This will show when Deny button clicked */}
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

export default PendingPost;

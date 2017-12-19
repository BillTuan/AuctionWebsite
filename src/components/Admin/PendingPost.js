import React, { Component } from "react";
import {
  Table,
  Button,
  Image,
  Confirm,
  Modal,
  Form,
  TextArea,
  Grid
} from "semantic-ui-react";

import { connect } from "react-redux";
import * as action from "../../action";
import axios from "axios";

class PendingPost extends Component {
  state = { openApproveConfirm: false, openDenyConfirm: false };

  //Approve---------------------
  showApproveConfirm = () => {
    this.setState({ openApproveConfirm: true });
  };
  approvehandleCancel = () => {
    this.setState({ openApproveConfirm: false });
  };
  async approvehandleConfirm(product) {
    //do something
    product.status = 1;
    await axios.put(`/api/admin/products/${product.id}`, product);
    this.props.getListProductPending();
    this.setState({ openApproveConfirm: false });
  }
  //Deny-------------------------
  denyhandleCancel = () => {
    this.setState({ openDenyConfirm: false });
  };
  denyhandleConfirm = () => {
    //do something
    this.setState({ openDenyConfirm: false });
  };
  componentDidMount() {
    this.props.getListProductPending();
  }
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
            {this.props.productsPending.map(product => {
              const { id, name, description, img1, seller } = product;
              return (
                <Table.Row key={id}>
                  <Table.Cell>{name}</Table.Cell>
                  <Table.Cell>{description}</Table.Cell>
                  <Table.Cell>{seller.id}</Table.Cell>
                  <Table.Cell>
                    <Image src={img1} size="small" />
                  </Table.Cell>
                  <Table.Cell collapsing>
                    {/* Approve confirm */}
                    <Confirm
                      open={this.state.openApproveConfirm}
                      cancelButton="No"
                      confirmButton="Yes"
                      onCancel={this.approvehandleCancel}
                      onConfirm={() => this.approvehandleConfirm(product)}
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
                            this.setState({ openDenyConfirm: true });
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

const mapStateToProps = ({ productReducer }) => {
  return {
    productsPending: productReducer.productsPending
  };
};

export default connect(mapStateToProps, action)(PendingPost);

import React, { Component } from "react";
import { Modal, Button } from "semantic-ui-react";
import Listing from "../Listing";
class ModalForm extends Component {
  state = {
    openModal: false
  };
  handleCancel = () => {
    this.setState({ openModal: false });
  };
  handleConfirm() {
    this.setState({ openModal: false });
  }
  render() {
    const { item } = this.props;
    return (
      <Modal
        trigger={
          <Button
            positive
            onClick={() => {
              this.setState({ openModal: true });
            }}
          >
            Update
          </Button>
        }
        open={this.state.openModal}
      >
        <Modal.Header>Please type a reason below</Modal.Header>
        <Modal.Content>
          <Listing
            editProduct={true}
            productDetail={item}
            confirm={() => this.handleConfirm()}
          />
        </Modal.Content>
        <Modal.Actions>
          <Button primary onClick={this.handleCancel}>
            Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default ModalForm;

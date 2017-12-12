import React, { Component } from "react";
import { Modal, Button, Form, TextArea } from "semantic-ui-react";
class ModalForm extends Component {
  state = {
    openModal: false
  };
  handleCancel() {
    this.setState({ openModal: false });
  }
  handleConfirm() {
    this.setState({ openModal: false });
  }

  render() {
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
          <div>
            <Form>
              <TextArea placeholder="Tell me why" />
            </Form>
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Button
            onClick={() => {
              this.handleCancel();
            }}
          >
            No
          </Button>
          <Button
            primary
            onClick={() => {
              this.handleConfirm();
            }}
          >
            Yes
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default ModalForm;

import React, { Component } from "react";
import { Segment, Form, Container, Dropdown, Button } from "semantic-ui-react";
import ImageUploader from "react-images-upload";
import { Editor } from "@tinymce/tinymce-react";

import { connect } from "react-redux";
import * as action from "../../action";

const bidTime = [
  { key: 1, text: "1 day", value: 1 },
  { key: 2, text: "2 days", value: 2 },
  { key: 3, text: "3 days", value: 3 },
  { key: 4, text: "4 days", value: 4 },
  { key: 5, text: "5 days", value: 5 }
];

class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [], categories: [] };
    this.onDrop = this.onDrop.bind(this);
  }

  componentDidMount() {
    this.props.getListCategory();
  }

  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture)
    });
  }

  handleEditorChange = e => {
    console.log("Content was updated:", e.target.getContent());
  };

  handleUploadImage = e => {};

  componentWillReceiveProps(nextProps) {
    this.handleCategory(nextProps);
  }

  handleCategory(props) {
    const categories = [];
    props.categories.map(({ id, name }) => {
      categories.push({
        key: id,
        text: name,
        value: id
      });
    });
    this.setState({ categories: categories });
  }
  render() {
    return (
      <Container text>
        <Segment padded>
          <Form>
            <Form.Field>
              <label>Product name</label>
              <input />
            </Form.Field>
            <Form.Field>
              <label>Category</label>
              <Dropdown
                placeholder="Category"
                fluid
                multiple
                selection
                options={this.state.categories}
              />
            </Form.Field>
            <Form.Field>
              <label>Product images</label>
              <ImageUploader
                withIcon={true}
                buttonText="Choose images"
                onChange={this.onDrop}
                withPreview={true}
                imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                maxFileSize={5242880}
                onChange={this.handleUploadImage}
              />
            </Form.Field>
            <Form.Field>
              <label>Description</label>
              <Editor
                init={{
                  plugins: "link image code",
                  toolbar:
                    "undo redo | bold italic | alignleft aligncenter alignright | code"
                }}
                onChange={this.handleEditorChange}
              />
            </Form.Field>
            <Form.Group widths="equal">
              <Form.Input
                label="Bid price"
                type="number"
                placeholder="Product bid price"
              />
              <Form.Input
                label="Buy price"
                type="number"
                placeholder="Product buy price"
              />
              <Form.Field>
                <label>Bid time</label>
                <Dropdown placeholder="Bid time" selection options={bidTime} />
              </Form.Field>
            </Form.Group>
            <Form.Button positive fluid>
              List product
            </Form.Button>
          </Form>
        </Segment>
      </Container>
    );
  }
}

const mapStateToProps = ({ categoryReducer }) => {
  return {
    categories: categoryReducer.categories
  };
};

export default connect(mapStateToProps, action)(Listing);

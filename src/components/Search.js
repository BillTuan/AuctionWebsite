import React, { Component } from "react";
import { Search } from "semantic-ui-react";
import * as action from "../action";
import { connect } from "react-redux";
class SearchWithKeyPress extends Component {
  componentWillMount() {
    this.resetComponent();
  }
  resetComponent = () => {
    this.setState({ value: "" });
  };
  handleKeyPress = event => {
    const { value } = this.state;
    if (event.key == "Enter") {
      this.props.getListResultSearch(value);
    }
  };
  handleOnChange = (event, { value }) => {
    this.setState({ value });
  };
  render() {
    const { value } = this.state;
    return (
      <Search
        icon="search"
        size="massive"
        value={value}
        style={{ marginTop: 15, marginBottom: 15 }}
        onSearchChange={this.handleOnChange}
        onKeyPress={this.handleKeyPress}
      />
    );
  }
}

export default connect(() => ({}), action)(SearchWithKeyPress);

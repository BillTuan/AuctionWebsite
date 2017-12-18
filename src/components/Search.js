import React, { Component } from "react";
import { Search, Image } from "semantic-ui-react";
import axios from "axios";
import { connect } from "react-redux";
import * as action from "../action";
import { withRouter } from "react-router-dom";
import NumberFormat from "./NumberFormat";

const resultRenderer = ({ id, name, img1, bid_price, description }) => (
  <div key={id}>
    <div className="image">
      <Image src={img1} />
    </div>
    <div className="content" style={{ textAlign: "left" }}>
      <div className="price">
        <NumberFormat value={bid_price} />
      </div>
      <div className="title">{name}</div>
      <div className="description">{description.substring(0, 50)}</div>
    </div>
  </div>
);

class SearchWithKeyPress extends Component {
  state = { value: "", results: [], isLoading: false };

  componentWillMount() {
    this.resetComponent();
  }

  resetComponent = () =>
    this.setState({ isLoading: false, results: [], value: "" });

  handleOnChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    axios.get(`/api/search?search=${value}`).then(({ data }) => {
      if (this.state.value.length < 1) return this.resetComponent();

      this.setState({
        isLoading: false,
        results: data
      });
    });
  };

  handleResultSelect = (e, { result }) => {
    this.props.getProduct(result.id);
    this.props.history.push(`/product/${result.id}`);
  };

  render() {
    const { value, results } = this.state;
    return (
      <Search
        icon="search"
        size="massive"
        resultRenderer={resultRenderer}
        results={results}
        value={value}
        style={{ marginTop: 15, marginBottom: 15 }}
        onSearchChange={this.handleOnChange}
        onResultSelect={this.handleResultSelect}
      />
    );
  }
}

export default connect(() => ({}), action)(withRouter(SearchWithKeyPress));

import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import CardProduct from "./CardProduct";
import { connect } from "react-redux";
import * as action from "../../action";
import { chunk } from "../../utils";
class Home extends Component {
  componentDidMount() {
    this.props.getListProduct();
    this.props.getListWatchItem();
  }

  checkWatchedProduct(product) {
    const { watchItem } = this.props;
    return (
      watchItem
        .map(item => {
          if (item.id === product.id) {
            return true;
          }
          return false;
        })
        .indexOf(true) !== -1
    );
  }

  renderProducts() {
    const { products } = this.props;
    const checkProducts = products.map(product => {
      return this.checkWatchedProduct(product) === true
        ? { ...product, like: true }
        : { ...product, like: false };
    });
    const likedProduct = chunk(checkProducts, 3);

    return likedProduct.map((rowProduct, index) => (
      <Grid.Row key={index}>
        {rowProduct.map(product => (
          <Grid.Column style={{ marginLeft: 40 }} key={product.id}>
            <CardProduct product={product} />
          </Grid.Column>
        ))}
      </Grid.Row>
    ));
  }
  render() {
    return (
      <Grid columns="equal" padded>
        {this.renderProducts()}
      </Grid>
    );
  }
}
const mapStateToProps = ({ productReducer, userReducer }) => {
  return {
    products: productReducer.products,
    watchItem: userReducer.watchProduct
  };
};
export default connect(mapStateToProps, action)(Home);

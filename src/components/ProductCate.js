import React, { Component } from "react";
import {
  Container,
  Grid,
  Menu,
  Segment,
  Table,
  Image
} from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as action from "../action";

class ProductCate extends Component {
  state = { activeItem: "" };

  componentDidMount() {
    this.props.getListCategory();
    this.props.getProductByCate(1);
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.categories.length !== 0) {
    //   this.setState({ activeItem: nextProps.categories[0].name });
    // }
  }

  handleItemClick = (name, id) => {
    this.setState({ activeItem: name });
    this.props.getProductByCate(id);
  };

  render() {
    const { activeItem } = this.state;
    const { productByCate } = this.props;
    return (
      <Container>
        <Grid>
          <Grid.Column width={4}>
            <Menu fluid vertical>
              <Menu.Item>
                <Menu.Header>Category</Menu.Header>
                <Menu.Menu>
                  {this.props.categories.map(({ name, id }) => (
                    <Menu.Item
                      key={id}
                      name={name}
                      active={activeItem === name}
                      onClick={(e, { name }) => this.handleItemClick(name, id)}
                    />
                  ))}
                </Menu.Menu>
              </Menu.Item>
            </Menu>
          </Grid.Column>
          <Grid.Column width={12}>
            <Segment>
              <Table fixed>
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
                  {productByCate.length !== 0 ? (
                    productByCate.map(
                      ({ id, name, description, seller, img1 }) => (
                        <Table.Row key={id}>
                          <Table.Cell>
                            <Link to={`/product/${id}`}>{name}</Link>
                          </Table.Cell>
                          <Table.Cell>
                            {description.substring(0, 100)}
                          </Table.Cell>
                          <Table.Cell>{seller.name}</Table.Cell>
                          <Table.Cell>
                            <Image src={img1} size="small" />
                          </Table.Cell>
                        </Table.Row>
                      )
                    )
                  ) : (
                    <Table.Row>
                      <Table.Cell colSpan={4}>There is no record</Table.Cell>
                    </Table.Row>
                  )}
                </Table.Body>
              </Table>
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default connect(
  ({ categoryReducer, productReducer }) => ({
    categories: categoryReducer.categories,
    productByCate: productReducer.productByCate
  }),
  action
)(ProductCate);

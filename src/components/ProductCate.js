import React, { Component } from "react";
import { Container, Grid, Menu } from "semantic-ui-react";
import { connect } from "react-redux";
import * as action from "../action";

class ProductCate extends Component {
  state = { activeItem: "" };

  componentDidMount() {
    this.props.getListCategory();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.categories.length !== 0) {
      this.setState({ activeItem: nextProps.categories[0].name });
    }
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;
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
                      onClick={this.handleItemClick}
                    />
                  ))}
                </Menu.Menu>
              </Menu.Item>
            </Menu>
          </Grid.Column>
          <Grid.Column width={12}>
            <h2>Hsdkjnfkdns</h2>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default connect(
  ({ categoryReducer }) => ({
    categories: categoryReducer.categories
  }),
  action
)(ProductCate);

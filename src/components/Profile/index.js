import React, { Component } from "react";
import { Container, Grid, Menu, Message } from "semantic-ui-react";
import { ContentList } from "./contentlist";
import { connect } from "react-redux";
import * as action from "../../action";
class Profile extends Component {
  state = { activeItem: "Profile", currentContent: ContentList.Profile };
  componentDidMount() {
    this.props.getListWatchItem();
    this.props.getParticipationProduct();
    this.props.getListPostedItem();
    this.props.getWinAuction();
  }
  handleItemClick = (e, { name }) =>
    this.setState({ activeItem: name, currentContent: ContentList[name] });
  render() {
    const { activeItem, currentContent } = this.state;
    return (
      <Container>
        <Message negative hidden={this.props.data.status !== 3}>
          <Message.Header>You have been banned</Message.Header>
          <p>Please contact administrator for more details!</p>
        </Message>
        <Grid>
          <Grid.Column width={4}>
            <Menu fluid vertical>
              <Menu.Item>
                <Menu.Header>Your account</Menu.Header>
                <Menu.Menu>
                  <Menu.Item
                    name="Profile"
                    active={activeItem === "Profile"}
                    onClick={this.handleItemClick}
                  />
                  <Menu.Item
                    name="SaleHistory"
                    active={activeItem === "SaleHistory"}
                    onClick={this.handleItemClick}
                  />
                  <Menu.Item
                    name="WatchProduct"
                    active={activeItem === "WatchProduct"}
                    onClick={this.handleItemClick}
                  />
                </Menu.Menu>
              </Menu.Item>
              <Menu.Item>
                <Menu.Header> Auction History</Menu.Header>
                <Menu.Menu>
                  <Menu.Item
                    name="Completed"
                    active={activeItem === "Completed"}
                    onClick={this.handleItemClick}
                  />
                  <Menu.Item
                    name="Participating"
                    active={activeItem === "Participating"}
                    onClick={this.handleItemClick}
                  />
                </Menu.Menu>
              </Menu.Item>
            </Menu>
          </Grid.Column>
          {currentContent}
        </Grid>
      </Container>
    );
  }
}
const mapStateToProps = ({ authReducer }) => ({
  data: authReducer.data.data
});
export default connect(mapStateToProps, action)(Profile);

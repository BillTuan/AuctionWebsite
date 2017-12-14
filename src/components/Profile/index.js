import React, { Component } from "react";
import { Container, Grid, Menu, Image } from "semantic-ui-react";
import { ContentList } from "./contentlist";
import { connect } from "react-redux";
import * as action from "../../action";
class Profile extends Component {
  state = { activeItem: "Profile", currentContent: ContentList.Profile };
  componentDidMount() {
    this.props.getProfileDetail(1);
    this.props.getListWatchItem(1);
    this.props.getParticipationProduct(1);
    this.props.getListPostedItem(1);
  }
  handleItemClick = (e, { name }) =>
    this.setState({ activeItem: name, currentContent: ContentList[name] });
  render() {
    const { activeItem, currentContent } = this.state;
    return (
      <Container>
        <Grid>
          <Grid.Column width={4}>
            <Menu fluid vertical>
              <Menu.Item>
                <Image
                  src="https://community.yellowfinbi.com/public/avatars/default-avatar.svg"
                  size="small"
                  circular
                  centered
                />
              </Menu.Item>
              <Menu.Item>
                <Menu.Header>Your account</Menu.Header>
                <Menu.Menu>
                  <Menu.Item
                    name="Profile"
                    active={activeItem === "Profile"}
                    onClick={this.handleItemClick}
                  />
                  <Menu.Item
                    name="Credit"
                    active={activeItem === "Credit"}
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

const mapStateToProps = () => {
  return {};
};
export default connect(mapStateToProps, action)(Profile);

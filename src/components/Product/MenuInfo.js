import React, { Component } from "react";
import { Tab, Menu, Label } from "semantic-ui-react";

const panes = [
  {
    menuItem: { key: "details", icon: "info", content: "Description" },
    render: props => <Tab.Pane>{props.description}</Tab.Pane>
  },
  {
    menuItem: (
      <Menu.Item key="auction">
        Auction History<Label>15</Label>
      </Menu.Item>
    ),
    render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>
  },
  {
    menuItem: (
      <Menu.Item key="review">
        Reviews<Label>8</Label>
      </Menu.Item>
    ),
    render: () => <Tab.Pane>Tab 1 Content</Tab.Pane>
  }
];

export default props => <Tab panes={panes} {...props} />;

import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import { Grid, Table } from "semantic-ui-react";

class Report extends Component {
  state = { report: [] };
  componentDidMount() {
    this.getListReport();
  }

  async getListReport() {
    const { data: report } = await axios.get("/api/admin/feedbacks");
    this.setState({ report });
  }

  render() {
    const { report } = this.state;
    return (
      <Grid.Column width={12}>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>From user</Table.HeaderCell>
              <Table.HeaderCell>To user</Table.HeaderCell>
              <Table.HeaderCell>Product</Table.HeaderCell>
              <Table.HeaderCell>Comment</Table.HeaderCell>
              <Table.HeaderCell>Time</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {report.length === 0 ? (
              <Table.Cell colSpan="5">No reports</Table.Cell>
            ) : (
              report.map(
                ({ id, comment, reviewer, receiver, product, created_at }) => {
                  const createdAt = moment(created_at).format(
                    "MMMM Do YYYY, h:mm:ss a"
                  );
                  return (
                    <Table.Row key={id}>
                      <Table.Cell>{reviewer.name}</Table.Cell>
                      <Table.Cell>{receiver.name}</Table.Cell>
                      <Table.Cell>{product.name}</Table.Cell>
                      <Table.Cell>{comment}</Table.Cell>
                      <Table.Cell>{createdAt}</Table.Cell>
                    </Table.Row>
                  );
                }
              )
            )}
          </Table.Body>
        </Table>
      </Grid.Column>
    );
  }
}

export default Report;

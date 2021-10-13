import { Button, Col, Divider, Row } from "antd";
import Text from "antd/lib/typography/Text";
import React from "react";
import "./index.css";
import { Table, Tag, Space } from "antd";
const Cards = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];
  return (
    <div className="Cards">
      <Divider orientation="left" className="Cards__Divider">
        <h3 className="Card__Divider--text mt-2 ">
          <Text type="secondary">Cards</Text>
        </h3>
      </Divider>
      <div className="Cards__Content">
        <Row>
          <Col>
            <Button type="primary" shape="default" size="large">
              Add New Cards
            </Button>
          </Col>
        </Row>
        <Row className="Cards__Table">
          <Col>
            <Table columns={columns} dataSource={data} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Cards;

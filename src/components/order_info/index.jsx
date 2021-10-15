import React from "react";
import { Table } from "antd";

const OrderInfo = () => {
    const columns = [{
            title: "Product",
            dataIndex: "product",
            key: "product",
        },
        {
            title: "Total",
            dataIndex: "total",
            key: "total",
        },
    ];

    const data = [{
            key: "1",
            product: "John Brown",
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
        <Table columns={columns} dataSource={data} pagination={false} summary={() => (
            <Table.Summary fixed>
              <Table.Summary.Row>
                <Table.Summary.Cell index={0}>Summary</Table.Summary.Cell>
                <Table.Summary.Cell index={1}>This is a summary content</Table.Summary.Cell>
              </Table.Summary.Row>
            </Table.Summary>
          )}/>
    );
};
export default OrderInfo;
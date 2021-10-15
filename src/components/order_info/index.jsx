import React from "react";
import { Skeleton, Table } from "antd";
import { useSelector } from "react-redux";
import "./index.css";
const OrderInfo = () => {
    const columns = [{
            title: "Product",
            key: "product",
            dataIndex: "name",
            render: (text, record) => {
                return (
                    <span>{text} x {record.quantity}</span>
                );
                
            }
        },
        {
            title: "Total",
            dataIndex: "total",
            key: "total",
        },
    ];
    const { totalPrice, cartItems } = useSelector(state => state.cartReducer);
    return (
        <div className="order-info">
{!cartItems && <Skeleton /> }
{!!cartItems && 
        <Table columns={columns} dataSource={cartItems?.data || []}  pagination={false} summary={() => (
            <Table.Summary fixed>
              <Table.Summary.Row>
                <Table.Summary.Cell index={0}>Total</Table.Summary.Cell>
                <Table.Summary.Cell index={1}>{totalPrice.data}</Table.Summary.Cell>
              </Table.Summary.Row>
            </Table.Summary>
          )} /> }
          </div>
    );
};
export default OrderInfo;
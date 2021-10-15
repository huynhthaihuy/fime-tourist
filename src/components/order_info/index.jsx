import React from "react";
import { Skeleton, Table } from "antd";
import { useSelector } from "react-redux";
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

    const { isGetting, product, isGettingSuccess } = useSelector(state => state.checkoutReducers);
    const { totalPrice } = useSelector(state => state.cartReducer);
    return (
        <div>
{!isGettingSuccess && <Skeleton /> }
{!!isGettingSuccess && 
        <Table columns={columns} dataSource={product}  pagination={false} summary={() => (
            <Table.Summary fixed>
              <Table.Summary.Row>
                <Table.Summary.Cell index={0}>Total</Table.Summary.Cell>
                <Table.Summary.Cell index={1}>{totalPrice}</Table.Summary.Cell>
              </Table.Summary.Row>
            </Table.Summary>
          )}/>
          }
          </div>
    );
};
export default OrderInfo;
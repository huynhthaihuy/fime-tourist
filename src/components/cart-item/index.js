import React from "react";
import { Row, Col, InputNumber } from "antd";
import {CloseCircleOutlined} from "@ant-design/icons";
function CartItem(props) {
    const {item, handleChangeQuantity, handleOnClickDelete} = props;

    return (
        <Row justify="space-around" align="middle" className="row">
            <Col span={1}><span onClick={handleOnClickDelete}><CloseCircleOutlined /></span></Col>
            <Col span={2}><img className="img" src={item.src} alt="" /></Col>
            <Col span={11} className="col col__align--left">
                <Row>
                    <Col span={24}><strong>{item.name}</strong></Col>
                </Row>
                <Row>
                    <Col span={24}>{item.description}</Col>
                </Row>
            </Col>
            <Col span={3}><strong>{"$" + item.price}</strong></Col>
            <Col span={4}><InputNumber min={1} defaultValue={item.quantity} onChange={handleChangeQuantity} /></Col>
            <Col span={3}><strong>{"$" + item.total }</strong></Col>
        </Row>
    );
}
export default CartItem;
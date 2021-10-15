/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Col, Row, Form, Button } from "antd";
import { BillForm, OrderInfo } from "@components";
import { useForm } from "antd/lib/form/Form";
import { useDispatch, useSelector } from "react-redux";
import { checkoutActions } from "@actions";
import "./index.css";
const {
    saveBillInfo,
    getOrderItem
  } = checkoutActions;
const Checkout = () => {
    const [form] = useForm();
    const { isLoading, product } = useSelector(state => state.checkoutReducers);
    console.log(isLoading, product);
    const dispatch = useDispatch();
    const onHandleSubmit = (value) => {
        dispatch(saveBillInfo(value));
    };
    useEffect(() => {
        dispatch(getOrderItem());
    }, []);
    return (
        <Form 
        onFinish={onHandleSubmit}
        form={form}
        layout="vertical">
        <strong>Billing detail</strong>
        <Row style={{ marginTop: "1rem"}}>
        <Col span={12} >
        <BillForm isLoading={isLoading}/>
        </Col>
        <Col span={12}><OrderInfo />
        <Form.Item>
        <Button className="place-order__button" block type="primary" htmlType="submit">Place order</Button>
        </Form.Item>
        </Col>
        </Row>
        </Form>
    );
};
export default Checkout;
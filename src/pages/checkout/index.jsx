/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Col, Row, Form, Button, Select, Input, Space, notification } from "antd";
import { OrderInfo } from "@components";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "antd/lib/form/Form";
import { checkoutActions } from "@actions";
import { useHistory } from "react-router-dom";
import "./index.css";

const {
    saveBillInfo,
    pushNoti
  } = checkoutActions;

const { Option } = Select;
const Checkout = () => {
    const history = useHistory();
    const { isLoading, isAddBillSuccess } = useSelector(state => state.checkoutReducers);
    const [form] = useForm();
  const dispatch = useDispatch();
  const { totalPrice, cartItems} = useSelector(state => state.cartReducer);
  const onHandleSubmit = (value) => {
    dispatch(saveBillInfo({...value, product: cartItems, totalPrice: totalPrice}));
};
useEffect(() => {
    !!isAddBillSuccess && openNotification();
}, [isAddBillSuccess]);
const openNotification = () => {
    const args = {
      message: "Đặt hàng thành công",
      description:
        "Chúng tôi xác nhận bạn vừa đặt thành công 1 đơn hàng",
      duration: 2,
    };
    notification.open(args);
    history.push("shop");
    dispatch(pushNoti());
  };
    return (
        <div>
        <Form 
        initialValues={{country: "vietnam"}}
    name="bill"
    onFinish={onHandleSubmit}
    form={form}
    layout="vertical">
        <div>
        <strong>Billing detail</strong>
        <Row style={{ marginTop: "1rem"}}>
        <Col span={14}>
        <div className="bill-info__container">
      <Space>
        <Form.Item
          label="First name"
          name="firstname"
          rules={[{ required: true, message: "Please input your first name!" }]}
        >
          <Input disabled={isLoading} size="large" />
        </Form.Item>
        <Form.Item
          label="Last name"
          name="lastname"
          rules={[{ required: true, message: "Please input your last name!" }]}
        >
          <Input disabled={isLoading} size="large" />
        </Form.Item>
      </Space>
      <Space>
        <Form.Item
          label="Company name"
          name="companyName"
        >
          <Input disabled={isLoading} size="large" />
        </Form.Item>
      </Space>
      <Space>
        <Form.Item
          label="Email Address"
          name="email"
          rules={[{
            type: "email",
            message: "The input is not valid E-mail!",
          },{ required: true, message: "Please input your email address!" }]}
        >
          <Input disabled={isLoading} size="large" />
        </Form.Item>

        <Form.Item
          label="Mobile No"
          name="mobile"
        >
          <Input disabled={isLoading} size="large" />
        </Form.Item>
      </Space>
      <Space>
        <Form.Item
          label="Country"
          name="country"
        >
          <Select disabled={isLoading} size="large">
            <Option value="argentina">Argentina</Option>
            <Option value="australia">Australia</Option>
            <Option value="brazil">Brazil</Option>
            <Option value="france">France</Option>
            <Option value="germany">Germany</Option>
            <Option value="southafrica">South Africa</Option>
            <Option value="spain">Spain</Option>
            <Option value="unitedstate">United State</Option>
            <Option value="unitedkingdom">United Kingdom</Option>
            <Option value="vietnam">Viet Nam</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="City"
          name="city"
        >
          <Input disabled={isLoading} size="large" />
        </Form.Item>
      </Space>
      <Form.Item
        label="Address">
        <Form.Item name="addressCity">
          <Input placeholder="Address" disabled={isLoading} size="large" />
        </Form.Item>
        <Form.Item name="detailAdrress">
          <Input placeholder="Appartment, suite, unit etc (optional)" disabled={isLoading} size="large" />
        </Form.Item>
      </Form.Item>
    </div>
        </Col>
        <Col span={10} className="padding-left-25"><OrderInfo />
        <Form.Item>
        <Button className="place-order__button" htmlFor='bill' block type="primary" htmlType="submit">Place order</Button>
        </Form.Item>
        </Col>
        </Row>
        </div>
        </Form>
        </div>
    );
};
export default Checkout;
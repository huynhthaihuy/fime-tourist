import React from "react";
import { Col, Row, Form, Button } from "antd";
import { BillForm, OrderInfo } from "@components";
import { useForm } from "antd/lib/form/Form";
import { useDispatch } from "react-redux";
import { checkoutActions } from "@actions";
import "./index.css";
const {
    saveBillInfo
  } = checkoutActions;
const Checkout = (props) => {
    const {setActiveSubMenu} = props;
    const [form] = useForm();
    const dispatch = useDispatch();

    React.useEffect(()=>{
        setActiveSubMenu("3");
    },[]);

    const onHandleSubmit = (value) => {
        dispatch(saveBillInfo(value));
    };
    return (
        <Form 
        onFinish={onHandleSubmit}
        form={form}
        layout="vertical">
        <strong>Billing detail</strong>
        <Row style={{ marginTop: "1rem"}}>
        <Col span={12} >
        <BillForm />
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
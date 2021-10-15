/* eslint-disable react/prop-types */
import React from "react";
import { Form, Select, Input, Space } from "antd";
import "./index.css";



const { Option } = Select;
const BillForm = ({ isLoading }) => {
  return (
    <div className="bill-info__container">
      <Space>
        <Form.Item
          label="First name"
          name="firstname"
          rules={[{ required: true, message: "Please input your first name!" }]}
        >
          <Input size="large" />
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
          rules={[{ required: true, message: "Please input Company name" }]}
        >
          <Input disabled={isLoading} size="large" />
        </Form.Item>
      </Space>
      <Space>
        <Form.Item
          label="Email Address"
          name="email"
          rules={[{ required: true, message: "Please input your email address!" }]}
        >
          <Input disabled={isLoading} size="large" />
        </Form.Item>

        <Form.Item
          label="Mobile No"
          name="mobile"
          rules={[{ required: true, message: "Please input your mobile number!" }]}
        >
          <Input disabled={isLoading} size="large" />
        </Form.Item>
      </Space>
      <Space>
        <Form.Item
          label="Country"
          name="country"
          rules={[{ required: true, message: "Please input your username!" }]}
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
          </Select>
        </Form.Item>
        <Form.Item
          label="City"
          name="city"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input disabled={isLoading} size="large" />
        </Form.Item>
      </Space>
      <Form.Item
        label="Address"
        rules={[{ required: true, message: "Please input your password!" }]}>
        <Form.Item name="addressCity">
          <Input disabled={isLoading} size="large" />
        </Form.Item>
        <Form.Item name="detailAdrress">
          <Input disabled={isLoading} size="large" />
        </Form.Item>
      </Form.Item>
    </div>
  );
};
export default BillForm;
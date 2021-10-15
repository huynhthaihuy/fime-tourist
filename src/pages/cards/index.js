import { Form, Button, Col, Divider, Modal, Row, Input, Image } from "antd";
import Text from "antd/lib/typography/Text";
import React, { useState, Component, useEffect } from "react";
import "./index.css";
import { Table, Tag, Space } from "antd";
import { Content } from "antd/lib/layout/layout";
import { AppleFilled } from "@ant-design/icons";
import { cardActions } from "@actions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { db } from "../../library/firestore/firebase";
import { useHistory } from "react-router-dom";

const INITIAL_CARD_NUMBER = "**** **** **** ****";
const MAX_CARD_NUMBER_LENGTH = 16;
const INITTIAL_CARD_NAME = "YOUR NAME HERE";
const INITTIAL_CARD_VALID = "**/**";

const Cards = () => {
  const columns = [
    {
      title: "Number",
      dataIndex: "number",
      key: "number",
    },
    {
      title: "Full Name",
      dataIndex: "fullname",
      key: "fullname",
    },
    {
      title: "Notes",
      dataIndex: "notes",
      key: "notes",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button
            type="primary"
            shape="default"
            size="large"
            type="primary"
            onClick={() => handledelete(record.id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  const { cards, isDeleteCardSuccess, isAddCardSuccess } = useSelector(
    (state) => state.cardModels
  );
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [cardNumber, setCardNumber] = useState(INITIAL_CARD_NUMBER);
  const [cardName, setCardName] = useState(INITTIAL_CARD_NAME);
  const [cardValid, setCardValid] = useState(INITTIAL_CARD_VALID);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handledelete = (id) => {
    dispatch(cardActions.deleteCard(id));
  };

  const handleOk = async () => {
    dispatch(cardActions.addCard(formData));
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleChangeCardNumber = ({ target: { value } }) => {
    if (value.length > MAX_CARD_NUMBER_LENGTH) return;

    let initialArr = INITIAL_CARD_NUMBER;
    const valueArr = Array.from(value);
    valueArr.forEach((num) => {
      initialArr = initialArr.replace("*", num);
    });

    setCardNumber(initialArr);
    setFormData({ ...formData, number: value });
  };

  const handleChangeCardName = ({ target: { value } }) => {
    let initialArr = INITTIAL_CARD_NAME;
    const valueArr = Array.from(value);
    valueArr.forEach((num) => {
      initialArr = initialArr.replace(initialArr, value);
    });
    setCardName(initialArr);
    setFormData({ ...formData, fullname: value });
  };

  const handleChangeCardValid = ({ target: { value } }) => {
    let initialArr = INITTIAL_CARD_VALID;
    const valueArr = Array.from(value);
    valueArr.forEach((num) => {
      initialArr = initialArr.replace("*", num);
    });

    setCardValid(initialArr);
    setFormData({ ...formData, expiri: value });
  };

  const handleChangeCardNotes = ({ target: { name, value } }) => {
    setFormData({ ...formData, notes: value });
  };

  const handleOnchangeValue = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  useEffect(
    () => {
      dispatch(cardActions.getCardRequest());

      // getData();
    },
    [isDeleteCardSuccess],
    [isAddCardSuccess]
  );

  useEffect(() => {
    console.log(cards, "???cards");
  }, [cards]);

  return (
    <div className="cards">
      <Divider orientation="left" className="cards__Divider">
        <h3 className="card__divider__text mt-2 ">
          <Text type="secondary">Cards</Text>
        </h3>
      </Divider>
      <div className="cards__content">
        <Content>
          <Row style={{ marginBottom: "2%" }}>
            <Col>
              <Button
                type="primary"
                shape="default"
                size="large"
                type="primary"
                onClick={showModal}
              >
                Add New Cards
              </Button>
            </Col>
          </Row>
          <Row className="cards__tbable">
            <Col span={24}>
              <Table columns={columns} dataSource={cards} />
            </Col>
          </Row>
        </Content>
        <Modal
          title="Add Card"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form name="advanced_search" className="ant-advanced-search-form">
            <Row gutter={24}></Row>
            <Row>
              <Col
                span={24}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "5%",
                }}
              >
                <div className="card">
                  <AppleFilled className="card__icon" />
                  <div className="card__number">{cardNumber}</div>
                  <div className="card__name">{cardName}</div>
                  <div className="card__text">valid thru</div>
                  <div className="card__valid">{cardValid}</div>
                </div>
              </Col>
              <Col span={24}>
                <Input
                  name="number"
                  placeholder="Number"
                  maxLength={MAX_CARD_NUMBER_LENGTH}
                  onChange={handleChangeCardNumber}
                  type="number"
                />
              </Col>
              <Col span={12} style={{ marginTop: "2%", paddingRight: "1%" }}>
                <Input
                  name="expiri"
                  placeholder="Expiri"
                  onChange={handleChangeCardValid}
                />
              </Col>
              <Col span={12} style={{ marginTop: "2%" }}>
                <Input
                  name="cvc"
                  placeholder="CVC"
                  onChange={handleOnchangeValue}
                />
              </Col>
              <Col span={24}>
                <Input
                  name="fullname"
                  placeholder="Full Name"
                  style={{ marginTop: "2%" }}
                  onChange={handleChangeCardName}
                />
              </Col>
              <Col span={24}>
                <Input
                  name="notes"
                  placeholder="Notes"
                  style={{ marginTop: "2%" }}
                  onChange={handleChangeCardNotes}
                />
              </Col>
            </Row>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default Cards;

import React, { useEffect } from "react";
import "./index.css";
import { Row, Col, Input, Button, Divider } from "antd";
import { CartItem } from "@components";
import { useHistory } from "react-router-dom";
import { cartActions } from "@actions";
import { useDispatch, useSelector } from "react-redux";
const { getItem } = cartActions;

function Cart(props) {
    const { setActiveSubMenu } = props;
    const dispatch = useDispatch();
    const history = useHistory();
    const { cartItems, isDeleteItemSuccess } = useSelector(state => state.cartReducer);
    const getTotal = (arr) => {
        const a = arr?.reduce((cur, val) => {
            return +cur + parseFloat(val.total);
        }, 0);
        return a?.toFixed(2);
    };
    const handleOnClickBtnCheckOut = () => {
        const sum = getTotal(cartItems.data);
        dispatch(cartActions.postTotalPrice(sum));
        setActiveSubMenu("3");
        history.push("/checkout");
    };
    React.useEffect(() => {
        dispatch(getItem());
    }, [isDeleteItemSuccess]);

    return (
        <div>
            <Row justify="space-around" align="middle">
                <Col span={1}></Col>
                <Col span={2}></Col>
                <Col span={11} className="col col__align--left" ><strong>Name</strong></Col>
                <Col span={3}><strong>Price</strong></Col>
                <Col span={4}><strong>Quantity</strong></Col>
                <Col span={3}><strong>Total</strong></Col>
            </Row>
            <Divider />
            {cartItems.data?.map((item, index) => {
                const handleChangeQuantity = (value) => {
                    let temp = item;
                    temp.quantity = value;
                    temp.total = (parseFloat(temp.price) * temp.quantity).toFixed(2);
                    dispatch(cartActions.updateQuantityItem(temp));
                };
                const handleOnClickDelete = () => {
                    console.log("click");
                    dispatch(cartActions.deleteCartItem(item));
                };
                return (<CartItem item={item}
                    handleChangeQuantity={handleChangeQuantity}
                    handleOnClickDelete={handleOnClickDelete} />);
            }
            )}
            <Divider />
            <Row className="row">
                <Col span={17}></Col>
                <Col md={4}>
                    <strong>Total</strong>
                </Col>
                <Col span={3}>
                    <strong>{
                        "$" + getTotal(cartItems.data)
                    }</strong>
                </Col>
            </Row>
            <Row className="row">
                <Col span={18}>
                    <Input size="large" placeholder="Discount Coupon" />
                </Col>
                <Col span={3}>
                    <Button className="btn" size="large" ><strong>Apply</strong></Button>
                </Col>
                <Col span={3}>
                    <Button type="primary" size="large" onClick={handleOnClickBtnCheckOut} className="btn"><strong>Checkout</strong></Button>
                </Col>
            </Row>
        </div>
    );
}
export default Cart;
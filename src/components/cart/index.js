import React from "react";
import "./index.css";
import { Row, Col, Input, Button, Divider } from "antd";
import { CartItem } from "@components";



function Cart() {
    const [dataCart, setDataCart] = React.useState([
        {
            name: "3DR - Propellers for 3DR Solo Drones (2-Pack) - Black",
            description: "3D Robotics Propellers for Solo Drones: Buy this set of replacement propellers before you need them so you can get back to flying as soon as you damage or lose a propeller. The 1-piece design of these propellers keeps them secure during flight, self-tightening so you can install them in an instant and return to in-air fun.",
            src: "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-new-2-600x600.jpg",
            price: "14.95",
            quantity: 1,
            total: "14.95",
        },
        {
            name: "3DR - Propellers for 3DR Solo Drones (2-Pack) - Black",
            description: "3D Robotics Propellers for Solo Drones: Buy this set of replacement propellers before you need them so you can get back to flying as soon as you damage or lose a propeller. The 1-piece design of these propellers keeps them secure during flight, self-tightening so you can install them in an instant and return to in-air fun.",
            src: "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-new-2-600x600.jpg",
            price: "14.95",
            quantity: 1,
            total: "14.95",
        },
        {
            name: "3DR - Solo Smart Rechargeable Battery - Black",
            description: "3D Robotics Battery for Solo Drones: Instead of waiting for your lone battery to recharge, get back to flying right away with this rechargeable battery for Solo drones. The battery can power your drone for up to 25 minutes with no camera attached, or 20 minutes carrying a camera.",
            src: "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-new-2-600x600.jpg",
            price: "149.5",
            quantity: 1,
            total: "149.5",
        },
        {
            name: "3DR - Propellers for 3DR Solo Drones (2-Pack) - Black",
            description: "3D Robotics Propellers for Solo Drones: Buy this set of replacement propellers before you need them so you can get back to flying as soon as you damage or lose a propeller. The 1-piece design of these propellers keeps them secure during flight, self-tightening so you can install them in an instant and return to in-air fun.",
            src: "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-new-2-600x600.jpg",
            price: "14.95",
            quantity: 1,
            total: "14.95",
        },
    ]);
    const getTotal = (arr) => {
        const a = arr.reduce((cur, val) => {
            return +cur + parseFloat(val.total);
        }, 0);
        return a.toFixed(2);
    };
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
            {dataCart.map((item, index) => {
                const handleChangeQuantity = (value) => {
                    let temp = [...dataCart];
                    temp[index].quantity = value;
                    temp[index].total = (parseFloat(temp[index].price) * temp[index].quantity).toFixed(2);
                    setDataCart(temp);
                };
                const handleOnClickDelete = () => {
                    let temp = [...dataCart];
                    temp.splice(index, 1);
                    setDataCart(temp);
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
                        getTotal(dataCart)
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
                    <Button type="primary" size="large" className="btn"><strong>Checkout</strong></Button>
                </Col>
            </Row>
        </div>
    );
}
export default Cart;
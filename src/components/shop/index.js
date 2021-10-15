import React from "react";
import "./index.css";
import { Row } from "antd";
import ShopSlider from "./ShopSlider";
import ShopContent from "./ShopContent";

const Shop = () => {
    
    return (
        <Row className="flex-box">
            <ShopSlider />
            <ShopContent />
        </Row>
    );
};

export default  Shop;
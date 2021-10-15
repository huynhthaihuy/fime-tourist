import React from "react";
import "./index.css";
import { Row } from "antd";
import {ShopSlider, ShopContent} from "@components";


const Shop = () => {
    
    return (
        <Row className="flex-box">
            <ShopSlider />
            <ShopContent />
        </Row>
    );
};

export default  Shop;
import React from "react";
import "./index.css";
import { Row } from "antd";
import { ShopSlider, ShopContent } from "@components";


const Shop = (props) => {
    const { setActiveSubMenu } = props;
    React.useEffect(() => {
        setActiveSubMenu("1");
    }, []);
    return (
        <Row className="flex-box">
            <ShopSlider />
            <ShopContent />
        </Row>
    );
};

export default Shop;
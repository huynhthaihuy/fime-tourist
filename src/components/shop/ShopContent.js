import React from "react";
import "./index.css";
import {
    Row,
    Col, 
    Card,
    Image,
    Pagination,
    Button
} from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

const ShopContent = () => {
    // const onSearch = value => console.log(value);
    const { Meta } = Card;
    
    return (   
            <Col span={16}>
                <Row>
                    <Col className="product__img__border" span={12}>
                        <Card
                            hoverable
                            cover={<Image width={200} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Logitech - Harmony Touch 15-Device Univ"  />
                    </Card>
                    <Button className="Add__to__cart " with ={50} type="Add To Cart" shape="circle" icon={<ShoppingCartOutlined />} >
                        Add To Cart
                    </Button>
                    </Col>
                    <Col className="product__img__border" span={12}>
                        <Card
                            hoverable
                            cover={<Image width={200} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Logitech - Harmony Touch 15-Device Univ"  />
                        </Card>
                    </Col>
                    <Col className="product__img__border" span={12}>
                        <Card
                            hoverable
                            cover={<Image width={200} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Logitech - Harmony Touch 15-Device Univ"  />
                        </Card>
                    </Col>
                    <Col className="product__img__border" span={12}>
                        <Card
                            hoverable
                            cover={<Image width={200} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Logitech - Harmony Touch 15-Device Univ"  />
                        </Card>
                    </Col>
                </Row>
                <Pagination size="small" total={50} />
            </Col>
    );
};

export default  ShopContent;
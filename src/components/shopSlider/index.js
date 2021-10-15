import React from "react";
import {
    Row,
    Col, Slider,
    Space, Input,
    Radio, Checkbox,
    Rate,
    Button,
} from "antd";


const ShopSlider = () => {
    const onSearch = value => console.log(value);
    const { Search } = Input;   
    
    return (
            <Col span={ 8 }>
                <div className='search'>
                    <Space direction="vertical" style={{ width: "100%" }}>
                        <Search placeholder="search text" onSearch={onSearch}  /> 
                    </Space>
                </div>
                <div className='div__border'>
                    <Slider range={{ draggableTrack: true }} defaultValue={[20, 50]} />
                </div>
                <div className='div__border'> 
                    <Row>
                        <Col>
                            <p>Multi Range</p>
                            <Radio.Group style={{ width: "100%",textAlign: "left" }}>
                                <Space direction="vertical">
                                <Radio value={1}>{">"}$10</Radio>
                                <Radio value={2}>$10-$100</Radio>
                                <Radio value={3}>$100-$500</Radio>
                                <Radio value={3}>{">"}$500</Radio>
                                <Radio value={3}>All</Radio>
                            </Space>
                            </Radio.Group>
                        </Col>
                    </Row>
                </div>
                <div className='div__border'> 
                    <Row>
                        <Col>
                            <Row>Brand</Row>
                            <Space direction="vertical" style={{ width: "100%" }}>
                                <Search placeholder="search text" onSearch={onSearch}  /> 
                            </Space>
                            <Radio.Group style={{ width: "100%" ,textAlign: "left"}}>
                                <Row>  
                                    <Space direction="vertical">
                                        <Checkbox >insignia</Checkbox>
                                        <Checkbox >Samsung</Checkbox>
                                        <Checkbox >Apple</Checkbox>
                                        <Checkbox >HP</Checkbox>
                                        <Checkbox >Sony</Checkbox>
                                        <Checkbox >Metra</Checkbox>
                                        <Checkbox >LG</Checkbox>
                                        <Checkbox >Dynex</Checkbox>
                                        <Checkbox >Canon</Checkbox>
                                        <Checkbox >Speck</Checkbox>
                                    </Space>
                                </Row>
                            </Radio.Group>
                        </Col>
                    </Row>
                </div>
                <div className='div__border'>
                    <Row>
                        <Col span={12}>
                            <Rate disabled defaultValue={5} />
                            <br />
                            <Rate disabled defaultValue={4} />
                            <br />
                            <Rate disabled defaultValue={3} />
                            <br />
                            <Rate disabled defaultValue={2} />
                            <br />
                            <Rate disabled defaultValue={1} />
                        </Col>
                        <Col span={12}>
                            <p>454</p>
                            <p >775</p>
                            <p >988</p>
                            <p >1213</p>
                            <p >23233</p>
                        </Col >
                    </Row>    
                </div>
                <div>
                    <Button type="primary" block>
                        CLEAR ALL FILTER
                    </Button>
                </div>
            </Col>
    );
};

export default  ShopSlider;
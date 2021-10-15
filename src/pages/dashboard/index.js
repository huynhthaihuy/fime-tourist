import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu } from "antd";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    ShoppingOutlined,
} from "@ant-design/icons";
import "./index.css";
import Checkout from "../checkout";
import Cart from "../cart";
import SubMenu from "antd/lib/menu/SubMenu";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const { Header, Sider, Content, Footer } = Layout;

function Dashboard() {
    
    
    const [state, setState] = React.useState({
        collapsed: false,
    });
    const toggle = () => {
        setState({
            collapsed: !state.collapsed,
        });
    };

    // active selected menu
    const [activeSubMenu,setActiveSubMenu] = React.useState("1");
   
    return (
        <Router>
            <Layout>
                <Sider trigger={null} collapsible collapsed={state.collapsed}>

                    <div className="logo">

                    </div>
                    <Menu theme="dark" mode="inline" selectedKeys={[activeSubMenu]}>
                        <SubMenu key="sub1" icon={<ShoppingOutlined />} title="Ecommerce">
                            <Menu.Item key="1" onClick={() =>setActiveSubMenu("1")} ><Link to="/shop">Shop</Link></Menu.Item>
                            <Menu.Item key="2" onClick={() =>setActiveSubMenu("2")}><Link to="/cart">Cart</Link></Menu.Item>
                            <Menu.Item key="3" onClick={() =>setActiveSubMenu("3")}><Link to="/checkout">Checkout</Link></Menu.Item>
                            <Menu.Item key="4" onClick={() =>setActiveSubMenu("4")}><Link to="/cards">Cards</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        <div className="trigger" onClick={toggle}>
                            {state.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        </div>
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: "24px 16px",
                            padding: 24,
                            minHeight: 800,
                        }}
                    >
                        <Switch>
                            <Route path="/cart">
                                <Cart setActiveSubMenu={setActiveSubMenu} />
                            </Route>
                            <Route path="/cards">
                            </Route>
                            <Route path="/checkout">
                            <Checkout />
                            </Route>
                            <Route path="/shop"> 
                            </Route>
                        </Switch>
                    </Content>
                    <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        </Router>

    );
}
export default Dashboard;
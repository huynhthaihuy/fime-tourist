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
import SubMenu from "antd/lib/menu/SubMenu";
const { Header, Sider, Content } = Layout;

function Dashboard() {

    const [state, setState] = React.useState({
        collapsed: false,
    });
    const toggle = () => {
        setState({
            collapsed: !state.collapsed,
        });
    };

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={state.collapsed}>
                <div className="logo">
                    
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                    <SubMenu key="sub1" icon={<ShoppingOutlined />} title="Ecommerce">
                        <Menu.Item key="1">Shop</Menu.Item>
                        <Menu.Item key="2">Cart</Menu.Item>
                        <Menu.Item key="3">Checkout</Menu.Item>
                        <Menu.Item key="4">Cards</Menu.Item>
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
                    Content
                </Content>
            </Layout>
        </Layout>
    );
}
export default Dashboard;
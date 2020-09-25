import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { adminRoutes } from '../../../routers/RouterConfig';
import { IconFont } from '../../../source/Icon';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const routes = adminRoutes.filter(route => route.isShow);

function Home(props) {
    return (
        <div>
            <Layout>
                <Header className="header" style={{ backgroundColor: "#428bca" }}>
                    <div className="logo" style={{ fontSize: "40", color: "#ffffff" }}>
                        管理后台
                    </div>
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            {routes.map(route => {
                                console.log(route);
                                return (
                                    <Menu.Item key={route.path}>
                                         <IconFont type={route.icon} />
                                        {route.title}
                                    </Menu.Item>
                                );
                            })}
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            {props.children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </div>
    )
}

export default Home;
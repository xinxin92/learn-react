import React from 'react'
import { withRouter } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Dropdown, Avatar, message } from 'antd';
import { CaretDownOutlined, UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { adminRoutes } from '../../../routers/RouterConfig';
import { IconFont } from '../../../source/Icon';
import './Home.css';
import { clearToken } from '../../../utils/Auth'
import { logoutApi } from '../../../services/Auth'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


const routes = adminRoutes.filter(route => route.isShow);

function Home(props) {
    const popMenu = (
        <Menu onClick={(p) => {
            if (p.key == 'logout') {
                logout();
            } else {
                message.info(p.key);
            }
        }}>
            <Menu.Item key='notice'>通知中心</Menu.Item>
            <Menu.Item key='setting'>设置</Menu.Item>
            <Menu.Item key='logout'>退出</Menu.Item>
        </Menu>
    );

    const logout = values => {
        logoutApi().then(res => {
            if (res.code == '0') {
                message.success('登出成功');
                clearToken();
                props.history.push('/login');
            } else {
                message.info(res.message);
            }
        }).catch(err => {
            console.log(err);
            message.error('出现异常');
        })
    };

    return (
        <div>
            <Layout>
                <Header className="header" style={{ backgroundColor: "#428bca" }}>
                    <div className="logo" style={{ fontSize: "25px", color: "#ffffff" }}>
                        管理后台
                    </div>
                    <Dropdown arrow trigger={['click']} placement="bottomRight" overlay={popMenu}>
                        <div>
                            <UserOutlined style={{ color: '#ffffff' }} />
                            <span style={{ fontSize: "15px", color: '#ffffff', margin: '3px' }}>用户名</span>
                            <CaretDownOutlined style={{ color: '#ffffff' }} />
                        </div>
                    </Dropdown>
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
                                return (
                                    <Menu.Item key={route.path} onClick={p => props.history.push(p.key)}>
                                        <IconFont type={route.icon} />
                                        {route.title}
                                    </Menu.Item>
                                );
                            })}
                        </Menu>
                    </Sider>
                    <Layout>
                        <Content
                            style={{
                                padding: 18,
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

export default withRouter(Home);
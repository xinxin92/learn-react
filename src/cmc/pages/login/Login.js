import React from 'react'
import { Form, Input, Button, Checkbox, Card, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { setToken } from '../../utils/Auth'
import './Login.css';
import { loginApi } from '../../services/Auth';

function Login(props) {
    const onFinish = values => {
        loginApi({
            username: values.username,
            password: values.password
        }).then(res => {
            if (res.code == '0') {
                message.success('登录成功');
                setToken(res.data.token);
                props.history.push('/admin');
            } else {
                message.info(res.message);
            }
        }).catch(err => {
            console.log(err);
            message.error('出现异常');
        })
    };

    return (
        <Card title='管理后台' className='login-form'>
            <Form initialValues={{ remember: true }} onFinish={onFinish}>
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: '请输入用户名！' }]}
                >
                    <Input prefix={<UserOutlined />} placeholder="用户名" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: '请输入密码！' }]}
                >
                    <Input.Password prefix={<LockOutlined />} placeholder="密码" />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>记住我</Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                        </Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default Login

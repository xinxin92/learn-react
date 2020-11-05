import React from 'react'
import { Form, Card, Input, Button } from 'antd';

function Edit(props) {
    const onFinish = values => {
        console.log(values);
    }
    return (
        <Card title='内容编辑'>
            <Form onFinish={values => onFinish(values)}  initialValues={{ title: '默认标题' }}>
                <Form.Item label='标题' name='title' rules={[{required:true,message:'请输入标题'}]}>
                    <Input placeholder='请输入标题'></Input>
                </Form.Item>
                <Form.Item label='内容' name='content' rules={[{required:true,message:'请输入内容'}]}>
                    <Input placeholder='请输入内容'></Input>
                </Form.Item>
                <Form.Item><Button htmlType='submit' type='primary'>保存</Button></Form.Item>
            </Form>
        </Card>
    )
}

export default Edit

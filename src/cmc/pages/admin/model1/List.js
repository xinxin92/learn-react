import React from 'react'
import { Card, Button, Table, Popconfirm } from 'antd';

const dataSource = [
    {
        key: 524,
        id: 524,
        title: '如何成为技术大牛',
        createTime: '2020-01-02 14:52:32',
        updateTime: '2020-01-05 18:25:69',
    }, {
        key: 589,
        id: 589,
        title: '全栈工程师修炼秘籍',
        createTime: '2020-08-22 14:52:32',
        updateTime: '2020-08-28 18:25:69',
    }, {
        key: 600,
        id: 600,
        title: 'react高阶技术探秘',
        createTime: '2020-09-10 14:52:32',
        updateTime: '2020-091-22 18:25:69',
    },
];

function List(props) {
    const columns = [
        {
            key: '序号',
            title: '序号',
            width: 80,
            render: (text, record, index) => index + 1
        },
        {
            key: 'ID',
            title: 'ID',
            dataIndex: 'id',
        },
        {
            key: '标题',
            title: '标题',
            dataIndex: 'title',
        },
        {
            key: '发布时间',
            title: '发布时间',
            dataIndex: 'createTime',
        },
        {
            key: '修改时间',
            title: '修改时间',
            dataIndex: 'updateTime',
        },
        {
            key: '操作',
            title: '操作',
            render: (text, record, index) => {
                return (
                    <div>
                        <Button type='primary' size='small'>修改</Button>
                        <Popconfirm
                            title='确定要删除此项？'
                            cancelText='取消'
                            okText='确认'
                            onCancel={() => { console.log('取消删除') }}
                            onConfirm={() => { console.log('确认删除') }}
                        >
                            <Button type='danger' size='small' style={{ margin: "0 1rem" }}>删除</Button>
                        </Popconfirm>

                    </div>
                );
            }
        }
    ];
    return (
        <div>
            <Card title='内容列表' extra={<Button type='primary' size='small' onClick={()=>props.history.push('/admin/model1/edit')}>新增</Button>}>
                <Table columns={columns} dataSource={dataSource} bordered></Table>
            </Card>
        </div>
    )
}

export default List

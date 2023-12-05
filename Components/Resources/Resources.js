import { React, useState } from 'react';
import { Avatar, Card, Col, Row, Typography, Tooltip, Button, Divider, Flex, Radio } from 'antd';
import { AntDesignOutlined, UserOutlined, EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { Title, Paragraph, Text } = Typography;
const { Meta } = Card;

const Resources = () => {
    const [size, setSize] = useState('large'); // default is 'middle'
    return (
        <>
            <div style={{ background: '#FFF', padding: '25px' }}>
                <Row gutter={16}>
                    <div className="flex flex-row justify-between items-center w-full">
                        <Title level={2}>Project Lists</Title>
                        <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
                            <Radio.Button value="All Projects">All</Radio.Button>
                            <Radio.Button value="In Progress">Inprogress</Radio.Button>
                            <Radio.Button value="Completed">Completed</Radio.Button>
                        </Radio.Group>
                    </div>
                </Row>
                <Row gutter={16}>


                    <Col span={6} >
                        <Card className='shadow-xl w-full'
                            bordered={false}
                        > <Title level={3}>Procurement</Title>
                            <Meta
                                avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                                title="Angela Moss"
                                description="Project Manager"
                            />
                            <Title level={5}>Current Task - Document</Title>
                            <Paragraph>Created Date 12/09/2023</Paragraph>
                            <Paragraph>Due Date 12/09/2023</Paragraph>
                            <Paragraph>Total Task- 10</Paragraph>

                            <Avatar.Group
                                maxCount={4}
                                size="large"
                                maxStyle={{
                                    color: '#f56a00',
                                    backgroundColor: '#fde3cf',
                                }}
                            >
                                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3" />
                                <Avatar
                                    style={{
                                        backgroundColor: '#f56a00',
                                    }}
                                >
                                    K
                                </Avatar>
                                <Avatar
                                    style={{
                                        backgroundColor: '#f56a00',
                                    }}
                                >
                                    K
                                </Avatar>
                                <Avatar
                                    style={{
                                        backgroundColor: '#f56a00',
                                    }}
                                >
                                    K
                                </Avatar>
                                <Avatar
                                    style={{
                                        backgroundColor: '#f56a00',
                                    }}
                                >
                                    K
                                </Avatar>
                                <Tooltip title="Ant User" placement="top">
                                    <Avatar
                                        style={{
                                            backgroundColor: '#87d068',
                                        }}
                                        icon={<UserOutlined />}
                                    />
                                </Tooltip>
                                <Avatar
                                    style={{
                                        backgroundColor: '#1677ff',
                                    }}
                                    icon={<AntDesignOutlined />}
                                />
                            </Avatar.Group>

                        </Card>
                    </Col>
                    <Col span={6} >
                        <Card className='shadow-xl w-full'
                            bordered={false}
                        > <Title level={3}>HRMS</Title>
                            <Meta
                                avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                                title="Angela Moss"
                                description="Project Manager"
                            />
                            <Title level={5}>Current Task - Document</Title>
                            <Paragraph>Created Date 12/09/2023</Paragraph>
                            <Paragraph>Due Date 12/09/2023</Paragraph>
                            <Paragraph>Total Task- 10</Paragraph>

                            <Avatar.Group
                                maxCount={4}
                                size="large"
                                maxStyle={{
                                    color: '#f56a00',
                                    backgroundColor: '#fde3cf',
                                }}
                            >
                                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3" />
                                <Avatar
                                    style={{
                                        backgroundColor: '#f56a00',
                                    }}
                                >
                                    K
                                </Avatar>
                                <Avatar
                                    style={{
                                        backgroundColor: '#f56a00',
                                    }}
                                >
                                    K
                                </Avatar>
                                <Avatar
                                    style={{
                                        backgroundColor: '#f56a00',
                                    }}
                                >
                                    K
                                </Avatar>
                                <Avatar
                                    style={{
                                        backgroundColor: '#f56a00',
                                    }}
                                >
                                    K
                                </Avatar>
                                <Tooltip title="Ant User" placement="top">
                                    <Avatar
                                        style={{
                                            backgroundColor: '#87d068',
                                        }}
                                        icon={<UserOutlined />}
                                    />
                                </Tooltip>
                                <Avatar
                                    style={{
                                        backgroundColor: '#1677ff',
                                    }}
                                    icon={<AntDesignOutlined />}
                                />
                            </Avatar.Group>

                        </Card>
                    </Col>
                    <Col span={6} >
                        <Card className='shadow-xl w-full'
                            bordered={false}
                        > <Title level={3}>App Kube</Title>
                            <Meta
                                avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                                title="Angela Moss"
                                description="Project Manager"
                            />
                            <Title level={5}>Current Task - Document</Title>
                            <Paragraph>Created Date 12/09/2023</Paragraph>
                            <Paragraph>Due Date 12/09/2023</Paragraph>
                            <Paragraph>Total Task- 10</Paragraph>

                            <Avatar.Group
                                maxCount={4}
                                size="large"
                                maxStyle={{
                                    color: '#f56a00',
                                    backgroundColor: '#fde3cf',
                                }}
                            >
                                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3" />
                                <Avatar
                                    style={{
                                        backgroundColor: '#f56a00',
                                    }}
                                >
                                    K
                                </Avatar>
                                <Avatar
                                    style={{
                                        backgroundColor: '#f56a00',
                                    }}
                                >
                                    K
                                </Avatar>
                                <Avatar
                                    style={{
                                        backgroundColor: '#f56a00',
                                    }}
                                >
                                    K
                                </Avatar>
                                <Avatar
                                    style={{
                                        backgroundColor: '#f56a00',
                                    }}
                                >
                                    K
                                </Avatar>
                                <Tooltip title="Ant User" placement="top">
                                    <Avatar
                                        style={{
                                            backgroundColor: '#87d068',
                                        }}
                                        icon={<UserOutlined />}
                                    />
                                </Tooltip>
                                <Avatar
                                    style={{
                                        backgroundColor: '#1677ff',
                                    }}
                                    icon={<AntDesignOutlined />}
                                />
                            </Avatar.Group>

                        </Card>
                    </Col>
                    <Col span={6} >
                        <Card className='shadow-xl w-full'
                            bordered={false}
                        >
                            <Title level={3}>Xformation</Title>
                            <Meta
                                avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                                title="Angela Moss"
                                description="Project Manager"
                            />
                            <Title level={5}>Current Task - Document</Title>
                            <Paragraph>Created Date 12/09/2023</Paragraph>
                            <Paragraph>Due Date 12/09/2023</Paragraph>
                            <Paragraph>Total Task- 10</Paragraph>

                            <Avatar.Group
                                maxCount={4}
                                size="large"
                                maxStyle={{
                                    color: '#f56a00',
                                    backgroundColor: '#fde3cf',
                                }}
                            >
                                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3" />
                                <Avatar
                                    style={{
                                        backgroundColor: '#f56a00',
                                    }}
                                >
                                    K
                                </Avatar>
                                <Avatar
                                    style={{
                                        backgroundColor: '#f56a00',
                                    }}
                                >
                                    K
                                </Avatar>
                                <Avatar
                                    style={{
                                        backgroundColor: '#f56a00',
                                    }}
                                >
                                    K
                                </Avatar>
                                <Avatar
                                    style={{
                                        backgroundColor: '#f56a00',
                                    }}
                                >
                                    K
                                </Avatar>
                                <Tooltip title="Ant User" placement="top">
                                    <Avatar
                                        style={{
                                            backgroundColor: '#87d068',
                                        }}
                                        icon={<UserOutlined />}
                                    />
                                </Tooltip>
                                <Avatar
                                    style={{
                                        backgroundColor: '#1677ff',
                                    }}
                                    icon={<AntDesignOutlined />}
                                />
                            </Avatar.Group>

                        </Card>
                    </Col>

                </Row>
            </div>,

        </>
    )
}

export default Resources

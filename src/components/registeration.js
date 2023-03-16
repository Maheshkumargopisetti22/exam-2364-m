import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

const onFinish = (values) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const App = () => (
    <>
        <main  style={{background:"blueviolet",height:"100vh",display:"flex",alignItems:"center"}}>

            <div style={{
                width: "60%",
                height: "80vh", margin: "auto", border: "1px solid black", display: "flex", alignItems: "center",background:"white"
            }}>

                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ width: "60%", height: "60vh" }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <h2>registeration form</h2>
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input style={{ width: "80%" }} />
                    </Form.Item>
                    <Form.Item
                        label="email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input style={{ width: "80%" }} />
                    </Form.Item>

                    <Form.Item
                        label="phone"
                        name="phone"
                        rules={[{ required: true, message: 'Please input your phone number!' }]}
                    >
                        <Input type='number' style={{ width: "80%" }} />
                    </Form.Item>
                    <Form.Item
                        label="password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password style={{ width: "80%" }} />
                    </Form.Item>

           

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                      
                    </Form.Item>
                    
                 
                 
                  
                </Form>
                <img src='https://res.cloudinary.com/cliqtick/image/upload/v1678959844/students/test_rwctqg.jpg' style={{
                    width: "30%", height: "40vh"
                }} />
            </div>
        </main>
    </>
);

export default App;

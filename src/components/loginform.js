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
                height: "60vh", margin: "auto", border: "1px solid black", display: "flex", alignItems: "center",background:"white"
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
                    <h2>login form</h2>
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input style={{ width: "80%" }} />
                    </Form.Item>

                    <Form.Item
                        label="Password"
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
                    <hr style={{width:"80%"}}></hr>
                    
                 
                  <div style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",gap:"2rem"}}>
                  <Button type="primary" htmlType="submit" style={{background:"white",color:"black"}}>
                            google
                        </Button>
                        <Button type="primary" htmlType="submit"style={{background:"white",color:"black"}}>
                            facebook
                        </Button>
                      
                  </div>
                  
                </Form>
                <img src='https://res.cloudinary.com/cliqtick/image/upload/v1678959844/students/test_rwctqg.jpg' style={{
                    width: "30%", height: "40vh"
                }} />
            </div>
        </main>
    </>
);

export default App;
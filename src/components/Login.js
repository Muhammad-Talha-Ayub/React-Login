import React from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import image from '../images/image.png';

const Login = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    axios.post('https://dummyjson.com/auth/login', {
      username: values.username,
      password: values.password,
    }).then((response) => {
      message.success('Login successful!');
      localStorage.setItem('token', response.data.token);
      navigate('/articles');
    }).catch(() => {
      message.error('Login failed!');
    });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome</h2>
        <p>Sign in to continue</p>
        <img
          src={image}  
          alt="Placeholder"
          className="login-image"
        />
      </div>
      <div className="login-form-container">
        <Form name="login" onFinish={onFinish}>
          <h2>Username</h2>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input className="input-field" placeholder="Username" />
          </Form.Item>
          <h2>Password</h2>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password className="input-field" placeholder="Password" />
          </Form.Item>
          <p className="forgot-password">Forgot password?</p>
          <Form.Item className='center'>
            <Button className='button' type="primary" htmlType="submit">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>      
    </div>
  );
};

export default Login;

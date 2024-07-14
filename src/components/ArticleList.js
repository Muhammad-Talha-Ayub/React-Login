import React, { useEffect, useState } from 'react';
import { List, message, Typography } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ArticleList.css'; 

const { Title } = Typography;

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/posts')
      .then((response) => {
        setArticles(response.data.posts);
      })
      .catch(() => {
        message.error('Failed to load articles.');
      });
  }, []);

  return (
  
    <div className="article-list-container">
      <Title level={1} className="article-list-title">Recent Blogs</Title>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={articles}
        renderItem={item => (
          <List.Item key={item.id} className="article-list-item">
            <List.Item.Meta
              title={<Link to={`/articles/${item.id}`}>{item.title}</Link>}
              description={item.body}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default ArticleList;

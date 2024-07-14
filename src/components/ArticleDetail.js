import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Descriptions, message } from 'antd';
import axios from 'axios';
import './ArticleDetail.css'; 

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  
  useEffect(() => {
    axios.get(`https://dummyjson.com/posts/${id}`)
      .then((response) => {
        setArticle(response.data);
      })
      .catch(() => {
        message.error('Failed to load article.');
      });
  }, [id]);

  if (!article) {
    return <div>No article found.</div>;
  }

  return (
    <div className="article-detail-container">
      <img 
        src="" 
        alt="Article"
        className="article-image"
      />
      <Descriptions title={article.title} column={1} layout="vertical">
        <Descriptions.Item label="Content">{article.body}</Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default ArticleDetail;

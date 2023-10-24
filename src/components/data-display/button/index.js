import React from 'react';
import { Button } from 'antd';
const Index = ({ title, onClick, type, isloading }) => {
  return (
    <Button onClick={onClick} type={type} loading={isloading}>
      {title}
    </Button>
  );
}

export default Index;

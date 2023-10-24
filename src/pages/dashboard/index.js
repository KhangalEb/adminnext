import React from 'react';
import { Display, Entry } from '@/components';
const Index = () => {
  const handleClick = () => {
    console.log("haha")
  }
  return (
    <div className={`flex min-h-screen flex-col items-center justify-between p-24`}>
      Hello Dashboard
      <Entry.Input placeholder={"input"} />
      <Display.Button onClick={handleClick} title={"Дарах"} />
    </div>
  );
}

export default Index;

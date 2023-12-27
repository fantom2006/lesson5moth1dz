import { UnorderedListOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Input, Space } from 'antd';
import { FaYoutube } from "react-icons/fa";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { CiBellOn } from "react-icons/ci";
import './SearchStyle.scss';

export function Appp({theme,toggleTheme}) {



  return (
    <div className={`d ${theme}`}>
      <div className="first">
        <UnorderedListOutlined id='tt' />
        <FaYoutube id='youtube' />
        <p>YouTube</p>
      </div>
      <div className="Int"><Search placeholder=" Search " onSearch={onSearch} enterButton /></div>
      <HiOutlineVideoCamera id='icon' />
      <CiBellOn />
      <img id='avo' src="https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340" alt="" />
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

const SearchInput = () => (
  <Space direction="vertical">
    {/* Additional components if needed */}
  </Space>
);

export default SearchInput;

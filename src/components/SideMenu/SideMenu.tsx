import React, { useState } from "react";
import type { MenuProps } from 'antd';
import Image from 'next/image';
import homeStyles from '@/styles/Home.module.css';
import styles from "./SideMenu.module.scss";
import { Menu } from "antd";

const items: MenuProps['items'] = [
  {
    label: 'Home',
    key: 'home',
  },
  {
    label: 'Contact',
    key: 'contact',
  },
  {
    label: 'Details',
    key: 'details',
  },
];

const SideMenu = () => {

  const [current, setCurrent] = useState('home');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <div className={styles['side-menu']}>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className={homeStyles.vercelLogo}
        width={100}
        height={24}
        priority
      />
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="vertical"
        items={items}
        style={{ width: "300px", paddingTop: "40px", borderTop: "1px solid transparent"}}
        selectable
        theme="dark"
      />
    </div>
  )
}

export default SideMenu;
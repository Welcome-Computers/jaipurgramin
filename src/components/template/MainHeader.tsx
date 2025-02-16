import { Button, Divider, Dropdown, Image, Input, MenuProps, Modal, Space, theme } from 'antd';
import { Typography } from 'antd';

import Link from 'next/link';
import React, { useState } from 'react';
import { Layout } from 'antd';
const { Header } = Layout;
const { Title } = Typography;
const { useToken } = theme;

const MainHeader = () => {
  const [open, setOpen] = useState(false); // Start with modal closed
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <span>Get into your account.</span>, // Modify with semantic content
    },
  ];

  const { token } = useToken();

  const contentStyle: React.CSSProperties = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  };

  const menuStyle: React.CSSProperties = {
    boxShadow: 'none',
  };

  return (
    <>
      <Header className="jp-header">
        {/* Left Side - Menu and Search */}
        <div className="jp-header__content__left">
          <Button type="text" icon={<span />} className="menu" onClick={() => setOpen(true)}>
            MENU
          </Button>
          <Input className="jp-header__content_left_search" placeholder="Search" prefix={<span />} />
        </div>

        {/* Center - Logo */}
        <div className="jp-header__center">
          NewsWeek <sup className=" jp-header__center_subHeader">PRO</sup>
        </div>

        {/* Right Side - Account and Subscribe */}
        <div className="jp-header__right">
          <Dropdown
            menu={{ items }}
            dropdownRender={(menu) => (
              <div style={contentStyle}>
                {React.cloneElement(menu as React.ReactElement<{ style: React.CSSProperties }>, { style: menuStyle })}
                <Divider style={{ margin: 0 }} />
                <Space className="jp-header__right__login_cover">
                  <Button type="primary" danger>
                    Login
                  </Button>
                </Space>
              </div>
            )}
          >
            <Link href="/account">
              <Space className="jp-header__right__account">
                <span />
                My account
              </Space>
            </Link>
          </Dropdown>

          <Button type="primary" className="jp-header__right__subscribe">
            SUBSCRIBE
          </Button>
        </div>
      </Header>

      {/* Modal Box */}
      <Modal className="jp-header-modal" open={open} onCancel={() => setOpen(false)} footer={null} centered width={900}>
        <div className="jp-header-modal__header">
          {/* Left Side - Image & Subscription */}
          <div className="jp-header-modal__left">
            <Title level={3} className="jp-header-modal__left__title ">
              News Week <br /> Magazine PRO
            </Title>
            <Image
              src="https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/1.jpg"
              width={150}
              height={150}
              alt="Subscription Image"
              className="jp-header-modal__left__image"
            />
            <div className="jp-header-modal__subscribe__btn__cover">
              <Button className="jp-header-modal__subscribe__btn" type="primary">
                SUBSCRIBE NOW
              </Button>
            </div>
          </div>

          {/* Right Side - Company Links */}
          <div className="jp-header-modal__right ">
            <Title className="jp-header-modal__right__title" level={4}>
              Company
            </Title>
            <ul className="jp-header-modal__right__list__cover">
              <li className="jp-header-modal__right__list">
                <Link className="jp-header-modal__right__link" href="#">
                  About
                </Link>
              </li>
              <li className="jp-header-modal__right__list">
                <Link className="jp-header-modal__right__link" href="#">
                  Contact us
                </Link>
              </li>
              <li className="jp-header-modal__right__list">
                <Link className="jp-header-modal__right__link" href="#">
                  Subscription Plans
                </Link>
              </li>
              <li className="jp-header-modal__right__list">
                <Link className="jp-header-modal__right__link" href="#">
                  My account
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default MainHeader;

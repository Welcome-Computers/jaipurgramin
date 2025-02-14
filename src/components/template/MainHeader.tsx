import { Button, Divider, Dropdown, Image, Input, MenuProps, Modal, Space, theme } from 'antd';
import { Header } from 'antd/es/layout/layout';
import Link from 'antd/es/typography/Link';
import Title from 'antd/es/typography/Title';
import React, { useState } from 'react';

const { useToken } = theme;

const MainHeader = () => {
  const [open, setOpen] = useState(true);
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <p>Get into your account.</p>,
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
      <Header className="news_week_header">
        {/* Left Side - Menu and Search */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <Button type="text" iconPosition="end" icon={<span />} className="menu" onClick={() => setOpen(true)}>
            MENU
          </Button>
          <Input placeholder="Search" prefix={<span />} style={{ width: 200 }} />
        </div>

        {/* Center - Logo */}
        <div className="text_header">
          NewsWeek <sup className="Text_SUb_Header">PRO</sup>
        </div>

        {/* Right Side - Account and Subscribe */}
        <div className="header_profile">
          <Dropdown
            menu={{ items }}
            dropdownRender={(menu) => (
              <div style={contentStyle}>
                {React.cloneElement(
                  menu as React.ReactElement<{
                    style: React.CSSProperties;
                  }>,
                  { style: menuStyle }
                )}
                <Divider style={{ margin: 0 }} />
                <Space style={{ padding: 8 }}>
                  <Button color="danger" variant="solid">
                    Login
                  </Button>
                </Space>
              </div>
            )}
          >
            <Link onClick={(e) => e.preventDefault()}>
              <Space className="profile">
              <span />
                My account
              </Space>
            </Link>
          </Dropdown>

          <Button type="primary" className="subscribe">
            SUBSCRIBE
          </Button>
        </div>
      </Header>

      {/* modal box */}

      <Modal open={open} onCancel={() => setOpen(false)} footer={null} centered width={900} className="news_week_header_modal_header">
        <div className="news_week_header_modal">
          {/* Left Side - Image & Subscription */}
          <div className="left_bar bg-red-600 p-6 flex flex-col items-center justify-center text-white w-1/2">
            <Title level={3} className="title">
              News Week <br /> Magazine PRO
            </Title>
            <Image
              src="https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/1.jpg"
              width={150}
              height={150}
              alt="Subscription Image"
              className="left_bar_image"
            />
            <div className="subscribe_btn">
              <Button type="primary">SUBSCRIBE NOW</Button>
            </div>
          </div>

          {/* Right Side - Company Links */}
          <div className="right_Bar">
            <Title level={4}>Company</Title>
            <ul>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Contact us</Link>
              </li>
              <li>
                <Link href="#">Subscription Plans</Link>
              </li>
              <li>
                <Link href="#">My account</Link>
              </li>
            </ul>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default MainHeader;

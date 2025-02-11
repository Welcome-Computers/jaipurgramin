import React, { useEffect, useMemo } from "react";
import { Layout, Input, Button, Badge, theme } from "antd";
import {
  SearchOutlined,
  FullscreenOutlined,
  MoonOutlined,
  BulbOutlined,
} from "@ant-design/icons";
import AlertDropdown from "./dashboard/AlertDropdown";
import UserDropdown from "./dashboard/UserDropdown";

const { Header } = Layout;

// Define AlertMessage type outside to avoid re-creating it on every render
interface AlertMessage {
  id: number;
  title: string;
  description: string;
  isRead: boolean;
}

const AppHeader: React.FC = () => {

  // Memoize themeConfig to avoid unnecessary re-creation

  const alerts: AlertMessage[] = [
    {
      id: 1,
      title: "New message from John",
      description: "Hey, can you review the document I sent?",
      isRead: false,
    },
    {
      id: 2,
      title: "Reminder: Meeting at 3 PM",
      description: "Don’t forget the meeting at 3 PM today.",
      isRead: true,
    },
  ];

  return (
    <Header className="jg-header" style={{ padding: 0 }}>
      <div className="jg-header__inner">
        <div className="jg-header__middle">
          <div className="jg-header__left">
            <form className="jg-header__form">
              <Button className="jg-header__search-btn" type="primary" icon={<SearchOutlined />} />
              <Input name="s" className="jg-header__input" placeholder="Search" />
            </form>
          </div>
          <div className="jg-header__right">
            <div className="jg-header__group">
              <div className="jg-header__group-two">
                {/* Dark/Light Mode Toggle */}
                <Button
                  type="text"
                  // onClick={toggleTheme}
                  className="jg-darklight-toggle"
                // title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                >
                  {/* {isDarkMode ? <MoonOutlined className="jg-darklight-toggle__icon" /> : <BulbOutlined className="jg-darklight-toggle__icon" />} */}
                  <BulbOutlined className="jg-darklight-toggle__icon" />
                </Button>

                {/* Fullscreen Button */}
                <Button id="jg-header__full" icon={<FullscreenOutlined />} type="text" />

                {/* Alert Dropdown */}
                <Badge count={alerts.length} offset={[-10, 10]} className="jg-header__count">
                  <AlertDropdown alerts={alerts} />
                </Badge>

                {/* User Dropdown */}
                <UserDropdown isAuthenticated onSignOut={() => console.log("Signed Out")} onSignIn={() => console.log("Sign In triggered")} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default AppHeader;

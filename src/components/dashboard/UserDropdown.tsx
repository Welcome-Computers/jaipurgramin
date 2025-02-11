import React, { useState } from "react";
import { Dropdown, MenuProps, Avatar, Button } from "antd";
import {
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
  LoginOutlined,
} from "@ant-design/icons";

interface UserDropdownProps {
  isAuthenticated: boolean;
  onSignOut: () => void;
  onSignIn: () => void;
}

const UserDropdown: React.FC<UserDropdownProps> = ({
  isAuthenticated,
  onSignOut,
  onSignIn,
}) => {
  const [loading, setLoading] = useState(false);

  const handleSignOut = () => {
    setLoading(true);
    onSignOut();
    setLoading(false);
  };

  const items: MenuProps["items"] = isAuthenticated
    ? [
      {
        key: "profile",
        icon: <SettingOutlined />,
        label: <a href="/profile">Profile</a>,
      },
      {
        key: "account",
        icon: <UserOutlined />,
        label: <a href="/account">My Account</a>,
      },
      {
        key: "signout",
        icon: <LogoutOutlined />,
        label: "Sign Out",
        onClick: handleSignOut,
      },
    ]
    : [
      {
        key: "signin",
        icon: <LoginOutlined />,
        label: "Sign In",
        onClick: onSignIn,
      },
    ];

  return (
    <Dropdown menu={{ items }} trigger={["click"]} placement="bottomRight">
      <Button className="jg-user-dropdown__button" loading={loading}>
        <Avatar icon={<UserOutlined />} className="jg-user-dropdown__avatar" />
      </Button>
    </Dropdown>
  );
};

export default UserDropdown;

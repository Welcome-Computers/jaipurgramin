"use client";

import React, { useState, useCallback } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  AppstoreAddOutlined,
  ShoppingCartOutlined,
  TagOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { useRouter } from "next/navigation";
import AppHeader from "../AppHeader";
import PageHeader from "../PageHeader";

const { Header, Sider, Content } = Layout;

// Define Menu Items outside to avoid re-creation on each render
const menuItems = [
  { key: "1", icon: <AppstoreAddOutlined />, label: "Dashboard", route: "/dashboard" },
  { key: "2", icon: <UserOutlined />, label: "Users", route: "/users" },
  { key: "3", icon: <TagOutlined />, label: "Category", route: "/category" },
  { key: "4", icon: <ShoppingCartOutlined />, label: "News", route: "/news" },
  { key: "5", icon: <FileSearchOutlined />, label: "Static Pages", route: "/cms_pages" },
  { key: "6", icon: <UploadOutlined />, label: "Reporter", route: "/reporter" },
];

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();

  // Use theme safely with a default fallback
  const { token } = theme.useToken() ?? { token: {} };
  const { colorBgContainer = "#fff", borderRadiusLG = "8px" } = token;

  // Memoized function for menu navigation
  const handleMenuClick = useCallback((e: { key: string }) => {
    const menuItem = menuItems.find((item) => item.key === e.key);
    if (menuItem) router.push(menuItem.route);
  }, [router]);

  return (
    <Layout className="dashboard-layout">
      {/* Sidebar */}
      <Sider trigger={null} collapsible collapsed={collapsed} style={{ background: colorBgContainer }}>
        <h1 className="dashboard-title">Jaipur Gramin</h1>
        <Menu
          mode="inline"
          onClick={handleMenuClick}
          defaultSelectedKeys={["1"]}
          items={menuItems}
        />
      </Sider>

      {/* Main Layout */}
      <Layout>
        {/* Header Section */}
        <Header className="dashboard-header" style={{ background: colorBgContainer }}>
          <Button
            type="text"
            aria-label="Toggle Sidebar"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: "16px", width: 64, height: 64 }}
          />
        </Header>
        <AppHeader />

        {/* Page Header */}
        <Layout className="pageHeader-box">
          <PageHeader />
        </Layout>

        {/* Main Content Area */}
        <Content
          style={{
            margin: "10px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;

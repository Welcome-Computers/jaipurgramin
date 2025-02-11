import React from "react";
import { Dropdown, MenuProps, Badge, Avatar, Button } from "antd";
import { BellOutlined } from "@ant-design/icons";

interface AlertMessage {
  id: number;
  title: string;
  description: string;
  isRead: boolean;
}

interface AlertDropdownProps {
  alerts: AlertMessage[];
}

const AlertDropdown: React.FC<AlertDropdownProps> = ({ alerts }) => {
  const items: MenuProps["items"] = alerts.length
    ? alerts.map((alert) => ({
      key: alert.id.toString(),
      label: (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Avatar size="small" style={{ backgroundColor: alert.isRead ? "#d9d9d9" : "#1890ff" }}>
            {alert.isRead ? "✔" : "!"}
          </Avatar>
          <div>
            <strong>{alert.title}</strong>
            <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>{alert.description}</p>
          </div>
        </div>
      ),
    }))
    : [{ key: "no-alerts", label: <span style={{ color: "#999" }}>No new notifications</span> }];

  return (
    <Dropdown menu={{ items }} trigger={["click"]} placement="bottomRight">
      <Badge count={alerts.filter((alert) => !alert.isRead).length} size="small">
        <Button className="jg-dropdown__button" shape="circle" icon={<BellOutlined />} />
      </Badge>
    </Dropdown>
  );
};

export default AlertDropdown;

import React from "react";
import { Row, Col, Breadcrumb, Button } from "antd";
import { HomeOutlined, UserAddOutlined } from "@ant-design/icons";

const PageHeader: React.FC = () => {
  const breadcrumbItems = [
    {
      title: (
        <a href="#">
          <HomeOutlined /> Home
        </a>
      ),
    },
    {
      title: <span className="jg-active">News</span>,
    },
  ];

  return (
    <Row className="jg-mg-top-30">
      <Col
        span={24}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Breadcrumb */}
        <div className="jg-sherah-breadcrumb">
          <h2 className="jg-sherah-breadcrumb__title">News</h2>
          <Breadcrumb items={breadcrumbItems} />
        </div>
        {/* End Breadcrumb */}

        {/* Add News Button */}
        <Button
          type="primary"
          icon={<UserAddOutlined />}
          className="jg-sherah-btn jg-sherah-gbcolor"
        >
          Add News
        </Button>
      </Col>
    </Row>
  );
};

export default PageHeader;

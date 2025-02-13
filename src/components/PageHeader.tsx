import React from "react";
import { Row, Col, Breadcrumb, Button } from "antd";
import Link from "next/link";

const PageHeader: React.FC = () => {
  const breadcrumbItems = [
    {
      title: (
        <Link href="#">
          <i className="lnr lnr-home"></i> Home
        </Link>
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
          className="jg-sherah-btn jg-sherah-gbcolor"
        >
          <i className="lnr lnr-user"></i> Add News
        </Button>
      </Col>
    </Row>
  );
};

export default PageHeader;

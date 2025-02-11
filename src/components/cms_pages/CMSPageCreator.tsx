import React, { useState } from "react";
import { Button, Form, Input, Select, Typography, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const CMSPageCreator = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values: any) => {
    setLoading(true);
    // Simulate an API call
    setTimeout(() => {
      setLoading(false);
      message.success("Page created successfully!");
      form.resetFields();
    }, 1500);
  };

  const uploadProps = {
    beforeUpload: (file: File) => {
      const isImage = file.type.startsWith("image/");
      if (!isImage) {
        message.error(`${file.name} is not a valid image file.`);
      }
      return isImage || Upload.LIST_IGNORE;
    },
  };

  return (
    <div className="jg-cms-page-creator">
      <Typography.Title level={3} className="jg-cms-page-creator__title">
        Create a New CMS Page
      </Typography.Title>

      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        className="jg-cms-page-creator__form"
      >
        <Form.Item
          label="Page Title"
          name="title"
          rules={[{ required: true, message: "Please enter the page title!" }]}
        >
          <Input placeholder="Enter the page title" />
        </Form.Item>

        <Form.Item
          label="Page Type"
          name="type"
          rules={[{ required: true, message: "Please select a page type!" }]}
        >
          <Select placeholder="Select a page type">
            <Select.Option value="about-us">About Us</Select.Option>
            <Select.Option value="terms-conditions">
              Terms and Conditions
            </Select.Option>
            <Select.Option value="faqs">FAQs</Select.Option>
            <Select.Option value="custom">Custom</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Page Content"
          name="content"
          rules={[
            { required: true, message: "Please enter the page content!" },
          ]}
        >
          <Input.TextArea
            placeholder="Enter the content for the page"
            rows={8}
          />
        </Form.Item>

        <Form.Item label="Upload Images" name="images">
          <Upload {...uploadProps} listType="picture" maxCount={5}>
            <Button icon={<UploadOutlined />}>Upload Images</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            className="jg-cms-page-creator__submit"
          >
            Create Page
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CMSPageCreator;

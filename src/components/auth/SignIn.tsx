import {
  Row,
  Col,
  Card,
  Form,
  Input,
  Checkbox,
  Button,
  Typography,
  Divider,
} from "antd";
import {
  FacebookOutlined,
  GoogleOutlined,
  GithubOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const SignIn = () => {
  return (
    <div className="jg-auth-page-wrapper">
      <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
        <Col xs={24} lg={12}>
          <Card
            bordered
            style={{ minWidth: "600px" }}
            className="jg-auth-card"
          >
            <Row gutter={16}>
              <Col xs={24} lg={10} className="jg-auth-card-left">
                <div className="jg-auth-card-left__content">
                  <Title level={3} className="jg-auth-title">
                    Start your journey with us.
                  </Title>
                  <Paragraph className="jg-auth-description">
                    It brings together your tasks, projects, timelines, files,
                    and more.
                  </Paragraph>
                  <Divider />
                  <footer className="jg-auth-footer">
                    <Paragraph className="jg-auth-footer__text">
                      © 2025 Lizant. Crafted with{" "}
                      <span
                        role="img"
                        aria-label="heart"
                        className="jg-auth-footer__icon"
                      >
                        ❤️
                      </span>{" "}
                      by Themesbrand
                    </Paragraph>
                  </footer>
                </div>
              </Col>
              <Col xs={24} lg={14}>
                <Card bordered={false} className="jg-auth-card-body">
                  <div className="jg-auth-welcome">
                    <Title level={5} className="jg-auth-welcome__title">
                      Welcome Back!
                    </Title>
                    <Paragraph className="jg-auth-welcome__subtitle">
                      Sign in to continue to Lizant.
                    </Paragraph>
                  </div>
                  <Form
                    id="login-form"
                    className="jg-auth-form"
                    layout="vertical"
                  >
                    <Form.Item
                      label="Username"
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <Input placeholder="Please Enter Your Username" />
                    </Form.Item>
                    <Form.Item
                      label="Password"
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!",
                        },
                      ]}
                    >
                      <Input.Password placeholder="Please Enter Your Password" />
                    </Form.Item>
                    <Form.Item name="remember" valuePropName="checked">
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="jg-auth-btn jg-auth-btn--primary"
                      >
                        Sign In
                      </Button>
                    </Form.Item>
                    <Form.Item>
                      <a
                        href="/lizant/react/light/auth-signin"
                        className="jg-auth-form__forgot-password"
                      >
                        Forgot password?
                      </a>
                    </Form.Item>
                  </Form>
                  <Divider>Or</Divider>
                  <div className="jg-auth-form__social">
                    <Title level={5} className="jg-auth-form__social-title">
                      Sign In with
                    </Title>
                    <div className="jg-auth-form__social-buttons">
                      <Button
                        icon={<FacebookOutlined />}
                        shape="circle"
                        className="jg-auth-btn jg-auth-btn--social jg-auth-btn--facebook"
                      />
                      <Button
                        icon={<GoogleOutlined />}
                        shape="circle"
                        className="jg-auth-btn jg-auth-btn--social jg-auth-btn--google"
                      />
                      <Button
                        icon={<GithubOutlined />}
                        shape="circle"
                        className="jg-auth-btn jg-auth-btn--social jg-auth-btn--github"
                      />
                      <Button
                        icon={<TwitterOutlined />}
                        shape="circle"
                        className="jg-auth-btn jg-auth-btn--social jg-auth-btn--twitter"
                      />
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SignIn;

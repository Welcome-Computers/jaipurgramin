import React from "react";
import { Input, Button } from "antd";
import { Layout } from "antd";
const { Header } = Layout;

const AppHeader: React.FC = () => {
  return (
    <Header className="jg-header" style={{ padding: 0 }}>
      <div className="jg-header__inner">
        <div className="jg-header__middle">
          <div className="jg-header__left">
            <form className="jg-header__form">
              <Button className="jg-header__search-btn" type="primary">
                <i className="lnr lnr-magnifier"></i> {/* Linearicon Search */}
              </Button>
              <Input name="s" className="jg-header__input" placeholder="Search" />
            </form>
          </div>
          <div className="jg-header__right">
            <div className="jg-header__group">
              <div className="jg-header__group-two">
                {/* Dark/Light Mode Toggle */}
                <Button type="text" className="jg-darklight-toggle">
                  <i className="lnr lnr-moon"></i> {/* Linearicon Bulb */}
                </Button>
                <Button type="text" className="jg-darklight-toggle">
                  <i className="lnr lnr-moon"></i> {/* Linearicon Bulb */}
                </Button>

                {/* Fullscreen Button */}
                <Button id="jg-header__full" type="text">
                  <i className="lnr lnr-screen-full"></i> {/* Linearicon Fullscreen */}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default AppHeader;

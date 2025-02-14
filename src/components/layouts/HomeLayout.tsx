"use client";

import React from "react";

import { Layout } from "antd";


const HomeLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <Layout className="home-layout">
      {children}
    </Layout>
  );
};

export default HomeLayout;

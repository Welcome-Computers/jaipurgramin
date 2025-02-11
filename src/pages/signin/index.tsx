"use client";

import React from "react";
import AuthLayout from "@/components/layouts/AuthLayout";

// Define the shape of form values
interface FormValues {
  username: string;
  password: string;
  remember: boolean;
}

const Signin: React.FC = () => {
  const onFinish = (values: FormValues): void => {
    console.warn("Received values of form: ", values);
  };

  return (
    <AuthLayout>
      <h1>Sign in</h1>
    </AuthLayout>
  );
};

export default Signin;

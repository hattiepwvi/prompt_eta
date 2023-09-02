"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

// 2、SessionProvider是来自next-auth/react库的一个组件，它提供了会话管理的功能。通过将children作为子元素传递给SessionProvider，它会确保在整个组件树中，所有使用useSession钩子或其他相关函数的组件都可以访问到会话信息。

const Provider = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;

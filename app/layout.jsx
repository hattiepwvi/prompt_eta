import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

// 1、metadata对象定义了一些元数据，包括页面的标题和描述。这些元数据可以在应用程序中使用，例如在SEO（搜索引擎优化）中。
export const metadata = {
  title: "Prompteta",
  description: "Discover & Share AI Prompts",
};

// 1、children 是一个特殊的 prop，用于传递组件的子元素： 将 props 作为函数的参数来接收,将 props 中的 children 解构出来, 就可以在组件内部直接使用 children 变量，而不需要通过 props.children 来访问
// page.jsx 作为 layout.jsx 的子组件；
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;

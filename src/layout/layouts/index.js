
import { Sider } from "..";
import { Layout } from 'antd';
const { Content, Header, Footer } = Layout;
function MainLayout({ children }) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}

      <Sider />

      {/* Main content */}
      <Layout style={{ padding: '0 24px 24px' }}>
        {/* <Header
          style={{
            padding: 0,
            background: "white",
          }}
        /> */}
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          ©2023 Created by Hango
        </Footer>
      </Layout>
    </Layout>
  );
}

export default MainLayout;

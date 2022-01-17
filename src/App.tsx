import "./App.css";
import { Col, Layout, Menu, Row } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const { Header, Content, Sider } = Layout;
function App() {
  return (
    <div className="App">
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <Menu mode="inline" defaultSelectedKeys={["4"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              Faturalar
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              Odeme Yontemleri
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              Hizmetler
            </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined />}>
              Ayarlar
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="site-layout-sub-header-background">
            <h1>Faturalar</h1>
          </Header>
          <Content>
            <div className="site-layout-background">content</div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;

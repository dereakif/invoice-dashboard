import "./App.css";
import { Typography, Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import TableContainer from "./components/TableContainer";

const { Title } = Typography;
const { Header, Content, Sider } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Sider breakpoint="lg" collapsedWidth="0">
          <Menu mode="inline" defaultSelectedKeys={["1"]}>
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
            <Title style={{ marginLeft: "2.5rem" }} level={3}>
              Faturalar
            </Title>
          </Header>
          <Content style={{ margin: "2rem 2.5rem 0" }}>
            <TableContainer />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;

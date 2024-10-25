import { Grid, Layout, Menu } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { ReactNode, useContext } from "react";
import './customLayout.css';
import { Link } from "react-router-dom";
import { AuthContext } from "context/auth";
const { useBreakpoint } = Grid;

interface CustomLayoutProps {
  children: ReactNode;
}

export const CustomLayout = ({ children }: CustomLayoutProps) => {
  const screens = useBreakpoint();
  const { logOut } = useContext(AuthContext)
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ flex: 1, minWidth: 0 }}
          key={0}
        >
          <Menu.Item key='trades'>
            <Link to='/trades'>Trades</Link>
          </Menu.Item>
          <Menu.Item key='requests'>
            <Link to='/requests'>Requests</Link>
          </Menu.Item>
          <Menu.Item key='collection'>
            <Link to='/collection'>My collection</Link>
          </Menu.Item>
          <Menu.Item key='history'>
            <Link to='/history'>History</Link>
          </Menu.Item>
          <Menu.SubMenu key="profileMenu" title="Profile" style={{ marginLeft: 'auto' }}>
            <Menu.Item key="profile">
              <Link to='/profile'>Profile</Link>
            </Menu.Item>
            <Menu.Item key="logout" onClick={logOut}>
              Log Out
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Header>
      <Content style={{ padding: screens.xs ? '20px 16px' : '50px 48px' }}>
        <div
          style={{
            background: 'white',
            minHeight: 280,
            padding: 24,
            borderRadius: '25px',
          }}
        >
          {children}
        </div>
      </Content>
    </Layout>
  )
}

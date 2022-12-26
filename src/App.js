import { Link, Route, Routes } from "react-router-dom"
import { siteRoutes } from "./router/siteRoutes"

import { Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;




function App() {

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return <Layout>
    <Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
      }}
    >
      <div
        style={{
          float: 'left',
          width: 120,
          height: 31,
          margin: '16px 24px 16px 0',
          background: 'rgba(255, 255, 255, 0.2)',
        }}
      />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={new Array(3).fill(null).map((_, index) => ({
          key: String(index + 1),
          label: `nav ${index + 1}`,
        }))}
      />
    </Header>
    <Content
      className="site-layout"
      style={{
        padding: '0 50px',
      }}
    >

      <div
        style={{
          padding: 24,
          minHeight: 380,
          background: colorBgContainer,
        }}
      >
        <Routes>
          {
            siteRoutes.map((item) => {
              return <Route path={item.path} element={item.element}></Route>
            })
          }
        </Routes>
      </div>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
}




export default App
import SideMenu from '@/components/SideMenu/SideMenu'
import { Layout } from "antd";
import LinkList from '@/components/LinkList/LinkList';

const { Sider, Content } = Layout;

export default function Home() {

  return (
    <Layout style={{ height: "100vh"}}>
      <Sider style={{ marginRight: "20px"}} width="350">
        <SideMenu />
      </Sider>
      <Content>
        <LinkList />
      </Content>
    </Layout>
  )
}

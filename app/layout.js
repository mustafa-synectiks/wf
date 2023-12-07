
import { Inter } from 'next/font/google'
import './globals.css'
import 'antd/dist/reset.css'
import GlobalState from '@/context'
import Navbar from '@/Components/Navbar/Navbar'
import Sidebar from '@/Components/Sidebar/Sidebar'
import { Layout, Menu, Button, theme, Card, Avatar, Badge, Input, Divider } from 'antd';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Workflow Management',
  description: 'Workflow Management for managing projects in easy way',
}
const { Sider, Content } = Layout;
export default function RootLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalState>
          <Layout theme="dark" style={{ minHeight: '100vh' }}>
            <Sider
              trigger={null}
              collapsible
              collapsed={collapsed}
              theme="light"
              className="fixed "
              style={{ position: 'fixed', height: '100vh' }}
            >
              <h5 className='uppercase bg-[#001529] text-white text-2xl p-4'>Synect<span className='text-red-700'>i</span>ks</h5>
              {/* ... your existing Sider content */}
              <Menu className='relative'
                theme="light"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                  {
                    key: '1',
                    icon: <ProjectFilled />,
                    label: 'Dashboard',
                    path: '/'
                  },
                  {
                    key: '2',
                    icon: <VideoCameraOutlined />,
                    label: 'Projects',
                    path: '/projects'
                  },
                  {
                    key: '3',
                    icon: <SignalFilled />,
                    label: 'Team',
                  },
                  {
                    key: '4',
                    icon: <IdcardFilled />,
                    label: 'Reports',
                  },
                  {
                    key: '5',
                    icon: <AccountBookFilled />,
                    label: 'Preference',
                  },
                  {
                    key: '6',
                    icon: <BellFilled />,
                    label: 'Notifications',
                  },
                ]}
              />
              <Button theme="dark"
                className='bg-white absolute top-2/4 -right-3'
                type="text"
                icon={collapsed ? < RightOutlined className='' /> : <LeftOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: '16px',
                  width: 16,
                  height: 64,
                  clipPath: `polygon(0 0, 100% 21%, 99% 80%, 0% 100%)`
                }}
              />
            </Sider>
            <Layout className="site-layout" style={{ marginLeft: collapsed ? 80 : 200 }}>
              <Navbar />
              <Content style={{ margin: '18px 16px', padding: '0px 10px', minHeight: 280 }}>

              </Content>
            </Layout>
          </Layout>
        </GlobalState>
      </body>
    </html>
  )
}

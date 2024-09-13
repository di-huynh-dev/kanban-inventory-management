import { Menu, MenuProps, Typography } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Box, Chart, Home2, ProfileCircle } from 'iconsax-react'
import { CiViewList } from 'react-icons/ci'
import { MdOutlineInventory } from 'react-icons/md'
import { FaTags } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { appInfo } from '../constants/appInfo'

const { Text } = Typography
const SiderComponent = () => {
  const items: MenuProps['items'] = [
    {
      key: 'dashboard',
      label: <Link to={'/'}>Dashboard</Link>,
      icon: <Home2 size={20} />,
    },
    {
      key: 'inventory',
      label: <Link to={'/inventory'}>Inventory</Link>,
      icon: <MdOutlineInventory size={20} />,
      children: [
        {
          key: 'addNew',
          label: <Link to={`/inventory/add-product`}>Add new</Link>,
        },
      ],
    },
    {
      key: 'Categories',
      label: <Link to={'/categories'}>Categories</Link>,
      icon: <FaTags size={20} className="text-muted" />,
    },
    {
      key: 'Report',
      label: <Link to={'/report'}>Report</Link>,
      icon: <Chart size={20} />,
    },
    {
      key: 'Suppliers',
      label: <Link to={'/suppliers'}>Suppliers</Link>,
      icon: <ProfileCircle size={20} />,
    },
    {
      key: 'Orders',
      label: <Link to={'/orders'}>Orders</Link>,
      icon: <Box size={20} />,
    },
    {
      key: 'Manage Store',
      label: <Link to={'/manage-store'}>Manage Store</Link>,
      icon: <CiViewList size={20} />,
    },
  ]
  return (
    <Sider
      width={250}
      style={{ height: '100vh', overflow: 'auto', padding: '10px' }}
      theme="light"
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken)
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type)
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={appInfo.logo} width={48} />
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: '1.5rem',
            margin: 0,
          }}
        >
          {appInfo.title}
        </Text>
      </div>
      <Menu mode="inline" items={items} theme="light" />
    </Sider>
  )
}

export default SiderComponent

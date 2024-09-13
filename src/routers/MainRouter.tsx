import React from 'react'
import { Layout } from 'antd'
import Header from '../components/Header'
import SiderComponent from '../components/SiderComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Inventories from '../pages/Inventories'
import AddProduct from '../pages/AddProduct'
import ReportPage from '../pages/ReportPage'
import Suppliers from '../pages/Suppliers'
import Orders from '../pages/Orders'
import Categories from '../pages/Categories'
import ManageStore from '../pages/ManageStore'

const { Content } = Layout

const MainRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout hasSider>
        <SiderComponent />
        <Layout>
          <Header />
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div
              style={{
                padding: 24,
                textAlign: 'center',
                background: '#fff',
              }}
            >
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route>
                  <Route path="/inventory" element={<Inventories />} />
                  <Route path="/inventory/add-product" element={<AddProduct />} />
                </Route>
                <Route path="/report" element={<ReportPage />} />
                <Route path="/suppliers" element={<Suppliers />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/manage-store" element={<ManageStore />} />
              </Routes>
            </div>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  )
}

export default MainRouter

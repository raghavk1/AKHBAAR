import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { CountryProvider } from './contexts/SelectionContext'
import { CategoryProvider } from './contexts/CategoryContext'
function Layout() {
  return (
    <>
     <div className="layout-container"> 
    <CategoryProvider>
      <CountryProvider>
        <Header />
        <Outlet />
        <Footer />
      </CountryProvider>
    </CategoryProvider>
    </div>
    </>
  )
}

export default Layout
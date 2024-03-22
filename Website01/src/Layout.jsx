import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { CountryProvider } from './contexts/SelectionContext'

function Layout() {
  return (
    <>
     <CountryProvider>
    <Header />
    <Outlet />
    <Footer />
    </CountryProvider>
    </>
  )
}

export default Layout
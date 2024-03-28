import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Sports from './components/Categories/Sports.jsx'
import Health from './components/Categories/Health.jsx'
import General from './components/Categories/General.jsx'
import Technology from './components/Categories/Technology.jsx'
import Entertainment from './components/Categories/Entertainment.jsx'
import Business from './components/Categories/Business.jsx'
import Science from './components/Categories/Science.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />} />
      <Route path='sports' element={<Sports />} />
      <Route path='science' element={<Science />} />
      <Route path='health' element={<Health />} />
      <Route path='technology' element={<Technology />} />
      <Route path='general' element={<General />} />
      <Route path='entertainment' element={<Entertainment />} />
      <Route path='business' element={<Business />} />
      <Route path='*' element={<div>Not Found</div>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

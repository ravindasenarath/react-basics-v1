import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
      <>
        <nav>
            <li><Link to="/todo">Todo</Link></li>
            <li><Link to="/about">About</Link></li>
        </nav>
        <Outlet/>
    </>
  )
}

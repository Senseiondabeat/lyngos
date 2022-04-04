import { MenuOutlined, Search } from '@mui/icons-material'
import { Menu } from '@mui/material'
import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <MenuOutlined />
        <div className="navbar_logo"><h2>Lyngos</h2></div>
        <Search />
    </div>
  )
}

export default Navbar
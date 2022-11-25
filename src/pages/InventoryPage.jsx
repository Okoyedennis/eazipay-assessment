import React from 'react'
import Inventory from '../components/Inventory/Inventory'
import Sidebar from '../components/sidebar/Sidebar'

const InventoryPage = () => {
  return (
      <div>
          <Sidebar />
          <Inventory />
    </div>
  )
}

export default InventoryPage
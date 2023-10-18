import React from 'react'
import '../styles/components/left-menu.sass'
import ItemSidebar from './ItemSidebar'
import SubItemSidebar from './SubItemSidebar'

const LeftMenu = () => {
  return (
    <div className='left-menu'>
        <div style={{width: '100%'}}>
            <ul>
                <ItemSidebar itemName="Contracts">
                  <SubItemSidebar linkTo='create-contract' subItemName='Create' />
                  <SubItemSidebar linkTo='edit-contract' subItemName='Edit' />
                </ItemSidebar>
                <ItemSidebar itemName="Enterprise">
                  <SubItemSidebar linkTo='view-enterprise' subItemName='View' />
                  <SubItemSidebar linkTo='invite-users' subItemName='Invite Users' />
                  <SubItemSidebar linkTo='users-list' subItemName='Users List' />              
                </ItemSidebar>
                <ItemSidebar itemName="Cost Center">
                  <SubItemSidebar linkTo='create-cost-center' subItemName='Create' />
                  <SubItemSidebar linkTo='edit-cost-center' subItemName='Edit' />
                </ItemSidebar>
                <ItemSidebar itemName="Owners">
                  <SubItemSidebar linkTo='create-owners' subItemName='View' />
                </ItemSidebar>
                <ItemSidebar itemName="Licensing Rules">
                  <SubItemSidebar linkTo='view-licensing-rules' subItemName='View' />
                </ItemSidebar>
            </ul>
        </div>
    </div>
  )
}

export default LeftMenu
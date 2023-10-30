import React from 'react'
import Navbar from '../Navbar'
import LeftMenu from '../LeftMenu'


import GridPattern from '../GridPattern';


const CostCenter = () => {

    const handleAddUser = async () => {
        // setIsLoading(true)
        // let passAleatorio = generateRandomString(10)
        // const formData = new FormData();
        // formData.append('name', user.name)
        // formData.append('email', user.email)
        // formData.append('img_user', user.img_user)
        // formData.append('password', passAleatorio)
        
        // console.log(user)
        // await apiALR.post('https://api.alrtcc.com/register/', formData)
        // .then(res => console.log(res))
        // .catch((err) => console.log(err))
        // .finally(()=>{
        //   setIsLoading(false)
        // })
    
        // const res = await apiALR.get('https://api.alrtcc.com/users/?format=json');
        // setRows(res.data)
      }

    const listHeaderItems = [
        {itemName:'Name', align: 'center', fileField: {is: false, accept: ''}, editField: {is: true, maxLength: 100},},
        {itemName:'Address', align: 'center', fileField: false, editField: true},
    ]

    const listBodyItems = [
        { id: 0, name: "Centro de custo 1", address: "Endereço 1", enterprise: 0 },
        { id: 0, name: "Centro de custo 2", address: "Endereço 1", enterprise: 0 },
        { id: 0, name: "Centro de custo 3", address: "Endereço 1", enterprise: 0 },
    ]
    return (
        <>
            <Navbar />
            <div className='d-flex flex-1'>
                <LeftMenu />
                <div className='section-list-contracts'>
                    <GridPattern
                        listHeaderItems={listHeaderItems}
                        listBodyItems = {listBodyItems}
                        addRows={(values)=>{handleAddUser(values)}}
                        component={'paper'}/>
                </div>

            </div>
        </>
    )
}

export default CostCenter
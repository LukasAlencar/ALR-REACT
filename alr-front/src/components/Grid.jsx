import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

import { LiaFileContractSolid } from 'react-icons/lia'
import TrashIcon from './TrashIcon'
import axios from 'axios';

const downloadContract = (file) =>{
    const fileURL = URL.createObjectURL(file);
    const a = document.createElement('a');
    a.href = fileURL;
    a.download = file.name;
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(fileURL);
}

const GridComponent = ({list, handleRemoveLicense}) => {

    useEffect(()=>{
        axios.get('http://localhost:3002/licensesUsers')
    },[])

// const handleRemoveLicense = (uuid) =>{
//     setLicenseList(prev => prev.filter(list => list.uuid!== uuid))
// }

  return (
    <Grid
    sx={{
        '--Grid-borderWidth': '1px',
        borderTop: 'var(--Grid-borderWidth) solid',
        borderLeft: 'var(--Grid-borderWidth) solid',
        borderColor: 'divider',
        '& > div': {
          borderRight: 'var(--Grid-borderWidth) solid',
          borderBottom: 'var(--Grid-borderWidth) solid',
          borderColor: 'divider',
        },
      }}
      style={{maxWidth: '90%', maxHeight: '90%', overflowY: 'scroll'}}
      container spacing={0}>
        <Grid xs={3}>
            <div className='text-center p-2'>Product</div>
        </Grid>
        <Grid xs={3}>
            <div className='text-center p-2'>Activate Date</div>
        </Grid>
        <Grid xs={3}>
            <div className='text-center p-2'>Expirate Date</div>
        </Grid>
        <Grid xs={3}>
            <div className='text-center p-2'>Actions</div>
        </Grid>
        {list != '' && 
            <>
                {list.map(el => {
                    return (
                        <>
                            <Grid xs={3}>
                            <div className='text-center p-2'>{el.licenseName}</div>
                            </Grid>
                            <Grid xs={3}>
                                <div className='text-center p-2'>{el.activeDate}</div>
                            </Grid>
                            <Grid xs={3}>
                                <div className='text-center p-2'>{el.expirationDate}</div>
                            </Grid>
                            <Grid xs={3}>
                                <div className='text-center d-flex justify-content-center p-2'>
                                    <LiaFileContractSolid title='Download Contract' className='link' onClick={()=>downloadContract(el.contract)}/> 
                                    <TrashIcon mt={-2} style={{marginTop: "-1px !important"}} uuid={el.uuid} handleClick={(e)=>handleRemoveLicense(e)} />
                                </div>
                                
                            </Grid>     
                        </>                           
                    )
                })}
            </>
        }

    </Grid>
  )
}

export default GridComponent

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// COMPONENTS { Table }

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { LiaFileContractSolid } from 'react-icons/lia'
import TrashIcon from './TrashIcon'
import axios from 'axios';

import { LiaClockSolid } from 'react-icons/lia'
import { AiOutlineCheck } from 'react-icons/ai'

import CircularProgress from '@mui/material/CircularProgress';
import RowCustom from './RowCustom';

const downloadContract = (file) => {
    const a = document.createElement('a');
    a.href = file;
    a.target = '_blank';
    a.download = file.name;
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(file);
}

const GridComponent = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [licensesList, setLicensesList] = useState(
        [{
            name: "",
            file: "",
            cost_center: "",
            status: true,
            start_date: "",
            end_date: ""
        }]
    )

    function getApi() {
        setIsLoading(true)

        axios.get('https://api.alrtcc.com/contracts/')
            .then(res => {
                setLicensesList(res.data)
            })
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        getApi();
    }, [])

    const handleAddLicense = async () => {
        setIsLoading(true);

        const formData = new FormData()
        formData.append('name', listAdd.product)
        formData.append('file', listAdd.contract)
        formData.append('status', listAdd.status)
        formData.append('start_date', listAdd.activateDate)
        formData.append('end_date', listAdd.expirationDate)

        await axiosInstance.post('https://api.alrtcc.com/register-contract/', formData)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err))
            .finally(() => {
                setIsLoading(false);
            })
        getApi()
    }

    const handleChange = (e) => {
        let { value, name } = e.target

        setListAdd((prev) => ({ ...prev, [name]: value }))
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        setListAdd(prev => ({ ...prev, contract: file }))
    }

    const [listAdd, setListAdd] = useState(
        {
            product: '',
            contract: '',
            status: 'True',
            activateDate: '',
            expirationDate: '',

        }
    )

    // Função para obter o token CSRF do cookie
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) {
            return parts.pop().split(';').shift();
        }
    }

    const csrftoken = getCookie('csrftoken');

    const axiosInstance = axios.create({
        headers: {
            'X-CSRFToken': csrftoken // Inclua o token CSRF nos cabeçalhos da solicitação
        }
    });

    const handleRemoveLicense = async (uuid) => {
        setIsLoading(true)
        await axios.delete(`https://api.alrtcc.com/contract/${uuid}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
            .finally(() => {
                setIsLoading(false);
            })

        getApi();
    }

    return (
        <>
            {isLoading && <>
                <div className='mask' />
                <CircularProgress className='progress-rol' />
            </>
            }
            <TableContainer className='mt-4' style={{ width: '95%', marginLeft: 'auto', marginRight: 'auto' }} component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Contract</TableCell>
                            <TableCell align="center">Product</TableCell>
                            <TableCell align="center">Activate Date</TableCell>
                            <TableCell align="center">Expirate  Date</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center"><input onChange={handleFileChange} type="file" accept='application/pdf' className='form-control' /></TableCell>
                            <TableCell><input value={listAdd.product} onChange={handleChange} name='product' className='form-control text-center' type="text" /></TableCell>
                            <TableCell align="center"><input onChange={handleChange} value={listAdd.activateDate} name='activateDate' className='form-control text-center' type="date" /></TableCell>
                            <TableCell align="center"><input onChange={handleChange} value={listAdd.expirationDate} name='expirationDate' className='form-control text-center' type="date" /></TableCell>
                            <TableCell align="center"><button onClick={handleAddLicense} style={{ width: 100 }} className='btn btn-primary'>Add +</button></TableCell>


                        </TableRow>
                        {licensesList?.slice().reverse()?.map((license) => (
                            <RowCustom setIsLoading={setIsLoading} handleRemoveLicense={(e)=>{handleRemoveLicense(e)}} datas={license}/>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


        </>














        // <Grid
        // sx={{
        //     '--Grid-borderWidth': '1px',
        //     borderTop: 'var(--Grid-borderWidth) solid',
        //     borderLeft: 'var(--Grid-borderWidth) solid',
        //     borderColor: 'divider',
        //     '& > div': {
        //       borderRight: 'var(--Grid-borderWidth) solid',
        //       borderBottom: 'var(--Grid-borderWidth) solid',
        //       borderColor: 'divider',
        //     },
        //   }}
        //   style={{maxWidth: '90%', maxHeight: '90%', overflowY: 'scroll'}}
        //   container spacing={0}>
        //     <Grid xs={3}>
        //         <div className='text-center p-2'>Product</div>
        //     </Grid>
        //     <Grid xs={3}>
        //         <div className='text-center p-2'>Activate Date</div>
        //     </Grid>
        //     <Grid xs={3}>
        //         <div className='text-center p-2'>Expirate Date</div>
        //     </Grid>
        //     <Grid xs={3}>
        //         <div className='text-center p-2'>Actions</div>
        //     </Grid>
        //     {list != '' && 
        //         <>
        //             {list.map(el => {
        //                 return (
        //                     <>
        //                         <Grid xs={3}>
        //                         <div className='text-center p-2'>{el.licenseName}</div>
        //                         </Grid>
        //                         <Grid xs={3}>
        //                             <div className='text-center p-2'>{el.activeDate}</div>
        //                         </Grid>
        //                         <Grid xs={3}>
        //                             <div className='text-center p-2'>{el.expirationDate}</div>
        //                         </Grid>
        //                         <Grid xs={3}>
        //                             <div className='text-center d-flex justify-content-center p-2'>
        //                                 <LiaFileContractSolid title='Download Contract' className='link' onClick={()=>downloadContract(el.contract)}/> 
        //                                 <TrashIcon mt={-2} style={{marginTop: "-1px !important"}} uuid={el.uuid} handleClick={(e)=>handleRemoveLicense(e)} />
        //                             </div>

        //                         </Grid>     
        //                     </>                           
        //                 )
        //             })}
        //         </>
        //     }

        // </Grid>
    )
}

export default GridComponent

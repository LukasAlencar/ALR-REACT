import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import React, { useState } from 'react'
import RowCustom from './RowCustom';

const GridPattern = ({ component, listHeaderItems, addRows, handleAddRow, listBodyItems }) => {
    const [newRow, SetNewRow] = useState({})
    if (addRows) {
        SetNewRow(() => {
            var obj = {}
            listHeaderItems.map(item => {
                if (item.editField) {
                    obj[item.name] = '';
                }
            })
            return obj;
        }
        )
    }

    const handleChange = (e) => {
        let { value, name } = e.target

        SetNewRow((prev) => ({ ...prev, [name]: value }))
    }

    const handleFileChange = async (e) => {
        const file = e.target.files[0]
        let name = e.target.name
        SetNewRow(prev => ({ ...prev, [name]: file }))
    }

    return (
        <>
            <TableContainer className='mt-4' style={{ width: '95%', marginLeft: 'auto', marginRight: 'auto' }} component={'paper'}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        {listHeaderItems &&
                            <TableRow>
                                {listHeaderItems.map(item => {
                                    return (
                                        <TableCell align={item.align}>{item.name}</TableCell>
                                    )
                                })}
                            </TableRow>
                        }
                    </TableHead>
                    {/* <TableBody>
                        {addRows &&

                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                {listHeaderItems &&
                                    <>
                                        {listHeaderItems.map(item => {
                                            if (item.editField) {
                                                if (item.fileField.is) {
                                                    return (
                                                        <TableCell align={item.align || ''}>
                                                            <input onChange={handleFileChange} type="file" name={item.itemName} accept={item.fileField.accept ? item.fileField.accept : ''} className='form-control' />
                                                        </TableCell>
                                                    )
                                                } else {
                                                    return (
                                                        <TableCell align={item.align || ''}>
                                                            <input value={newRow[item.name] || ''} onChange={handleChange} name={item.itemName} type='text' maxLength={item.editField.maxLength ? item.editField.maxLength : ''} className='form-control text-center' />
                                                        </TableCell>
                                                    )
                                                }
                                            }
                                        })}
                                        <TableCell align={'center'}><button onClick={() => handleAddRow(newRow)} style={{ width: 100 }} className='btn btn-primary'>Add +</button></TableCell>
                                    </>

                                }


                            </TableRow>
                        }
                        {listBodyItems?.slice().reverse()?.map((item, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                {listHeaderItems.map((subItem, indexHeader) => {
                                    return (
                                        <TableCell key={indexHeader} align="center">{item[subItem.itemName]}</TableCell>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableBody> */}
                </Table>
            </TableContainer>
        </>
    )
}

export default GridPattern
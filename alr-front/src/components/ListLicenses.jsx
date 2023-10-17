import React, { useEffect } from 'react'
import '../styles/components/list-licenses.sass';


const ListLicenses = ({datas}) => {
    
    return (
        <>
            {datas?.map(data => {
                return (
                    <div className='item-license' key={data.uuid}>
                            <div className="row text-align-center width-100">
                                <div className="col-sm">
                                    {data.qtd}
                                </div>
                                <div className="col-sm">
                                    {data.name}
                                </div>
                                <div className="col-sm">
                                    {data.owner}
                                </div>
                                <div className="col-sm">
                                    {data.expirationDate}
                                </div>
                            </div>
                        </div>
                        
                )
            })}
        </>
    )
}

export default ListLicenses
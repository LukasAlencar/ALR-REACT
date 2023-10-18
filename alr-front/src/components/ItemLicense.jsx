import React, { useState } from 'react'

const ItemLicense = ({ list, status }) => {

    return (
        <>
            {
                list.map(el => {
                    return (
                        <div className={'item-license ' + status} key={el.uuid}>
                            <div className="row text-align-center width-100">
                                <div className="col-sm">
                                    {el.qtd}
                                </div>
                                <div className="col-sm">
                                    {el.name}
                                </div>
                                <div className="col-sm">
                                    {el.owner}
                                </div>
                                <div className="col-sm">
                                    {el.expirationDate}
                                </div>
                            </div>
                        </div>

                    )
                })
            }

        </>
    )

}

export default ItemLicense
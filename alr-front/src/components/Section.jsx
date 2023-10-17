import React from 'react'
import '../styles/components/section.sass'
import ListLicenses from './ListLicenses'

const Section = () => {

    const list = [
        {qtd: 1, name:'Photoshop', owner:'Adobe', expirationDate: '24/01/2024', uuid: 'xxxxxxxxxxxxxxxx'},
        {qtd: 1, name:'Photoshop', owner:'Adobe', expirationDate: '24/01/2024', uuid: '1xxxxxxxxxxxxxxx'},
        {qtd: 1, name:'Photoshop', owner:'Adobe', expirationDate: '24/01/2024', uuid: '3xxxxxxxxxxxxxxx'},
        {qtd: 1, name:'Photoshop', owner:'Adobe', expirationDate: '24/01/2024', uuid: '4xxxxxxxxxxxxxxx'},
        {qtd: 1, name:'Photoshop', owner:'Adobe', expirationDate: '24/01/2024', uuid: '5xxxxxxxxxxxxxxx'},
        {qtd: 1, name:'Photoshop', owner:'Adobe', expirationDate: '24/01/2024', uuid: '6xxxxxxxxxxxxxxx'},
        {qtd: 1, name:'Photoshop', owner:'Adobe', expirationDate: '24/01/2024', uuid: '7xxxxxxxxxxxxxxx'},
        {qtd: 1, name:'Photoshop', owner:'Adobe', expirationDate: '24/01/2024', uuid: '8xxxxxxxxxxxxxxx'},
        {qtd: 1, name:'Photoshop', owner:'Adobe', expirationDate: '24/01/2024', uuid: '9xxxxxxxxxxxxxxx'},
        {qtd: 1, name:'Photoshop', owner:'Adobe', expirationDate: '24/01/2024', uuid: '0xxxxxxxxxxxxxxx'},
        {qtd: 1, name:'Photoshop', owner:'Adobe', expirationDate: '24/01/2024', uuid: '12xxxxxxxxxxxxxx'},
        {qtd: 1, name:'Photoshop', owner:'Adobe', expirationDate: '24/01/2024', uuid: '13xxxxxxxxxxxxxx'},

    ]

    return (
    <div className='section-container'>
        <div className="section-list">
            <div className="header-section">
                <ul className='ul-header-section'>
                    <div className="row text-align-center width-100">
                        <div className="col-sm">
                            Qtd.
                        </div>
                        <div className="col-sm">
                            Name
                        </div>
                        <div className="col-sm">
                            Owner
                        </div>
                        <div className="col-sm">
                            Expiration Date
                        </div>
                    </div>
                </ul>
            </div>
            <div className="main-section">
                <ListLicenses datas={list}/>
            </div>
        </div>
    </div>
    )
}

export default Section
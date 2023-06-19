import React from 'react'
import {HiOutlineDesktopComputer} from 'react-icons/hi'
import {VscTools} from 'react-icons/vsc'
import {FaCartArrowDown} from 'react-icons/fa'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import '../styles/components/calculator.sass'
import { useState } from 'react'





function Calculator() {

    const animatedComponents = makeAnimated()
    const optionsEnterprise = [
        { value: 'microsoft', label: 'Microsoft' },
        { value: 'adobe', label: 'Adobe' },
        { value: 'vmware', label: 'VMware' }
    ]
    const optionsMicrosoft = [
        { value: 'windows', label: 'Windows' },
        { value: 'office', label: 'Office' },
    ]
    const optionsAdobe = [
        { value: 'photoshop', label: 'Photoshop' },
        { value: 'afterEffects', label: 'After Effects' },
    ]

    const optionsVMware = [
        { value: 'fusion11', label: 'Fusion 11' },
    ]

    const [selected, setSelected] = useState([]);

    const changeSelectedOption = (e) =>{
        var allOptions = []
        if(e.length > 0){
            e.map((item) => {
                allOptions.push(item.value)
            })
            setSelected(allOptions)
        }
    }

    function optionsToArray(obj){
        const listOptions = []

        obj.map((enterprise) => {
            enterprise.map((product) => {
                listOptions.push(product)
            })
        })
        return listOptions
    }

    function verifyOptions(){
        let allOptions = []
        if(selected.find(element => element == 'microsoft')){
            allOptions.push(optionsMicrosoft)
        }
        if(selected.find(element => element == 'adobe')){
            allOptions.push(optionsAdobe)
        }
        if(selected.find(element => element == 'vmware')){
            allOptions.push(optionsVMware)
        }
        allOptions = optionsToArray(allOptions)
        return allOptions
    }

    
    return (
    <>
        <h1>Insira as informações:</h1>
        <div style={{height: '100%'}} className='d-flex flex-wrap c-chart align-items-center justify-content-center'>
            <div className="col-3">
                <HiOutlineDesktopComputer className='icon-computer'/>
            </div>
            <div className="col-9 mb-3">
                <input type="number" className="form-control text-center" placeholder='Quantidade de Máquinas' id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="col-3">
                <VscTools className='icon-computer'/>
            </div>
            <div className="col-9 mb-3">
                <Select
                    isMulti
                    onChange={changeSelectedOption}
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    placeholder={"Fabricantes"}
                    options={optionsEnterprise}
                />
            </div>
            <div className="col-3">
                <FaCartArrowDown className='icon-computer'/>
            </div>
            <div className="col-9 mb-3">
                <Select
                    isMulti
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    placeholder={"Produtos"}
                    options={verifyOptions()}
                />
            </div>
        </div>
    </>
  )
}

export default Calculator
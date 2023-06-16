import {SiMicrosoft} from 'react-icons/si'
import {SiAdobe} from 'react-icons/si'
import {GrVmware} from 'react-icons/gr'
import GraphBar from './GraphBar'

import '../styles/components/card.sass'

const Card =({cardName})=>{
    function icon(){
        if(cardName == 'Microsoft'){
            return(<SiMicrosoft className='icon'/>)
        }else if(cardName == 'Adobe'){
            return(<SiAdobe className='icon'/>)
        }else if(cardName == 'VMware'){
            return(<GrVmware className='icon'/>)
        }
    }
    return(
    <>

        <div className="col-sm-4 d-flex wrap-in justify-content-center ">
        <div className="cardName">
            {cardName} {icon()}
            
        </div>
            <div className="card">
            <div className="card-body">
                <GraphBar/>
            </div>
            </div>
        </div>
    </>
)
}

export default Card
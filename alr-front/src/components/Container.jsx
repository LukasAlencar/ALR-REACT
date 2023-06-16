import Card from "./Card"
import '../styles/components/container.sass'
const Container=()=>{
    return(
        <div className="container-fluid containerCards">
            <div className="row">
                    <Card cardName="Microsoft" />
                    <Card cardName="Adobe"/>
                    <Card cardName="VMware"/>
            </div>
        </div>
    )
}

export default Container
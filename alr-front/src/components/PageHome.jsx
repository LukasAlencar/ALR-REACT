import Container from "./Container";
import useLoadData from "../hooks/useLoadData";
import { useEffect } from "react";
const PageHome = () =>{
    // const schedules = useLoadData();

    useEffect(()=>{
        // console.log(schedules)
    },[])

    return(
        <>
            <Navbar></Navbar>
            <Container page={'home'}/>
        </>
    )  
}

export default PageHome
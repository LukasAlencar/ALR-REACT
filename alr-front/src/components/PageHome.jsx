import Container from "./Container";
import { useEffect } from "react";
import Navbar from "./Navbar";
import {motion} from "framer-motion"

const PageHome = () =>{
    // const schedules = useLoadData();

    useEffect(()=>{
        // console.log(schedules)
    },[])

    return(
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <Navbar></Navbar>
            <Container page={'home'}/>
        </motion.div>
    )  
}

export default PageHome
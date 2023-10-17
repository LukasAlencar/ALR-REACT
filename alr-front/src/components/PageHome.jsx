import Container from "./Container";
import { useEffect } from "react";
import Navbar from "./Navbar";
import {motion} from "framer-motion"
import LeftMenu from "./LeftMenu";
import Section from "./Section";

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
            style={{display: "flex", height: "100vh", flexDirection: "column"}}
        >
            <Navbar></Navbar>
            <div className="flex-container-menu-left">
                <LeftMenu/>
                <Section/>
            </div>
        </motion.div>
    )  
}

export default PageHome
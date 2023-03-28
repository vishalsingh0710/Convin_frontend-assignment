import { Mycard } from "./Card"
import InputField from "./input"
import { useState } from "react";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateEducationAsync } from "../Redux/Createslice";
import { updateEntertainmentAsync } from "../Redux/Createslice";

export const EditCard = ({id,title,link,onClick,heading}) => {
    const dispatch = useDispatch();
    const [linked,setlink]= useState(link);
    const [name,setname]= useState(title);

    const handleClick = () => {
        console.log(heading)
        {if(name.length===0 | linked.length===0)
            toast("Please enter name or link !")
        else{
            if(heading==='Bucket1') 
                dispatch(updateEntertainmentAsync({id:id,title:name,link:linked}))
            else    
                dispatch(updateEducationAsync({id:id,title:name,link:linked}))
            setlink('')
            setname('')
        }
        }
    }
    return(
        <div style={{
        backdropFilter: "blur(2px)",
        background: "rgba(13,13,38,0.4)",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
        borderRadius: "4px",
        padding: "12px",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        }}>
            <ToastContainer/>
            <div style={{backgroundColor:'#D7D7DA', padding:20, borderRadius:24}}>
                <InputField placeholder="Enter name here" value={name} onChange={(event) => setname(event.target.value)}/>
                <InputField placeholder="Enter link here" value={linked} onChange={(event) => setlink(event.target.value)}/>
                <Button variant="contained" style={{width:100, marginLeft:20, backgroundColor:'#FCCFDA', color:'#DA0B3F'}} onClick={onClick}>close</Button>
                <Button variant="contained" style={{width:100, marginLeft:20, backgroundColor:'blue', color:'white'}} onClick={handleClick}>submit</Button>
            </div>
        </div>
    )
}
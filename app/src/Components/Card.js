import { Button } from "@material-ui/core";
import React from "react";
import InputField from "./input";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addentertainmentAsync } from "../Redux/Createslice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { makeStyles } from "@material-ui/core/styles";
import { addeducationAsync } from "../Redux/Createslice";

export const Mycard = () => {
    const dispatch = useDispatch();
    const [link,setlink]= useState('');
    const [name,setname]= useState('');

    const handleClick2 = () => {
        {if(name.length===0 | link.length===0)
            toast("Please enter name or link !")
        else{
            dispatch(addeducationAsync({title:name,link:link}))
            setlink('')
            setname('')
        }
        }
    }
    const handleClick = () => {
        {if(name.length===0 | link.length===0)
            toast("Please enter name or link !")
        else{
            dispatch(addentertainmentAsync({title:name,link:link}))
            setlink('')
            setname('')
        }
        }
    }
    const classes = useStyles()
    return (
        <form>
        <div style={{height:'300px',width:'300px', display:'flex', borderRadius:24, paddingTop:24, flexDirection:'column',backgroundColor:'#F0F0FE'}}>
            <InputField placeholder="Enter name here" value={name} onChange={(event) => setname(event.target.value)}/>
            <InputField placeholder="Enter link here" value={link} onChange={(event) => setlink(event.target.value)}/>
            <div style={{display:'flex', justifyContent:'center',marginTop:20}}>
                <Button variant="contained" style={{width:100, marginLeft:20, backgroundColor:'blue', color:'white'}} onClick={handleClick}>Add to Bucket1</Button>
                <Button variant="contained" style={{width:100, marginLeft:20, backgroundColor:'blue', color:'white'}} onClick={handleClick2}>Add to Bucket2</Button>
                <ToastContainer className={classes.toast}/>
            </div>
        </div>
        </form>
    )
}

const useStyles =makeStyles({
    toast: {
        "& div div div":{
            color:'red'
        }
    }
})
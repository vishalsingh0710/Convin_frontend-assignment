import { useEffect } from 'react';
import { Itemlist } from '../Components/List';
import { useDispatch, useSelector } from 'react-redux';
import { getentertainmentAsync } from '../Redux/Createslice';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import { DeleteEntertainmentAsync } from '../Redux/Createslice';
import { getEducationAsync } from '../Redux/Createslice';
import { DeleteeducationAsync } from '../Redux/Createslice';
import { addeducationAsync } from '../Redux/Createslice';
import { addentertainmentAsync } from '../Redux/Createslice';

export const List = () => {
    const dispatch = useDispatch()
    const projectdata = useSelector(state => state.myprojects.entertainment);
    const educationState = useSelector(state => state.myprojects.education);
    const [selectedRows1, setSelectedRows1] = useState([]);
    const [selectedRows2, setSelectedRows2] = useState([]);

    const handleDelete1 = () => {
        selectedRows1.map((id)=>(
            dispatch(DeleteEntertainmentAsync({id:id}))
        ))
        setSelectedRows1([])
    }
    const handleMove3 = () => {
        const filteredData = projectdata.filter((data) => selectedRows1.includes(data.id));
        selectedRows1.map((id)=>(
            dispatch(DeleteEntertainmentAsync({id:id}))
        ))
        filteredData.map((item)=> {
            dispatch(addeducationAsync({title:item.title, link:item.link}))
        })
        setSelectedRows1([])
    }
    const handleMove4 = () => {
        selectedRows2.map((id)=>(
            dispatch(DeleteeducationAsync({id:id}))
        ))
        const filteredData = educationState.filter((data) => selectedRows2.includes(data.id));
        filteredData.map((item)=> {
            dispatch(addentertainmentAsync({title:item.title, link:item.link}))
        })
        setSelectedRows2([])
    }
    const handleDelete2 = () => {
        selectedRows2.map((id)=>(
            dispatch(DeleteeducationAsync({id:id}))
        ))
        setSelectedRows2([])
    }
    const handleRowSelect1 = (rowId) => {
        if (selectedRows1.includes(rowId)) {
          setSelectedRows1(selectedRows1.filter((id) => id !== rowId));
        } else {
          setSelectedRows1([...selectedRows1, rowId]);
        }
    };
    const handleRowSelect2 = (rowId) => {
        if (selectedRows2.includes(rowId)) {
          setSelectedRows2(selectedRows2.filter((id) => id !== rowId));
        } else {
          setSelectedRows2([...selectedRows2, rowId]);
        }
    };
    useEffect(()=>{
        dispatch(getentertainmentAsync())
        dispatch(getEducationAsync())
    },[dispatch])

    const heading1="Bucket1"
    const heading2="Bucket2"
    return (
        <div style={{display:'flex', flexDirection: 'row'}}>
            <div style={{width:"100%"}}>
                {selectedRows1.length>0 && <div style={{display:'flex',justifyContent:'center',marginLeft:60}}>
                    <Button variant="contained" onClick={handleDelete1} style={{width:100, height:40, backgroundColor:'#FCCFDA', color:'#DA0B3F',border:'1px solid #DA0B3F'}}>Delete</Button>  
                    <Button variant="contained" onClick={handleMove3} style={{width:100, height:40, backgroundColor:'#FCCFDA', color:'#DA0B3F',border:'1px solid #DA0B3F'}}>Move to another bucket</Button>  
                    </div>}
                <Itemlist data= {projectdata} heading = {heading1} handleRowSelect={handleRowSelect1} selectedRows={selectedRows1}/>
            </div>
            <div style={{width:"100%"}}>
            {selectedRows2.length>0 && <div style={{display:'flex',justifyContent:'center',marginLeft:60}}>
                    <Button variant="contained" onClick={handleDelete2} style={{width:100, height:40, backgroundColor:'#FCCFDA', color:'#DA0B3F',border:'1px solid #DA0B3F'}}>Delete</Button>  
                    <Button variant="contained" onClick={handleMove4} style={{width:300, height:40, backgroundColor:'#FCCFDA', color:'#DA0B3F',border:'1px solid #DA0B3F'}}>Move to another bucket</Button>  
                    </div>}
                <Itemlist data= {educationState} heading = {heading2} handleRowSelect={handleRowSelect2} selectedRows={selectedRows2}/>
            </div>
        </div>
	);
}
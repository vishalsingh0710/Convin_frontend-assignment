import { Button } from "@material-ui/core"
import { Checkbox } from '@mui/material';
import { useState } from "react";
import { EditCard } from "./EditCard";
import YouTube from 'react-youtube';

export const Itemlist = (data) => {
    const [openedit,setopenedit] = useState(false);
    const [id,setid] = useState();
    const [title,settitle] = useState();
    const [link,setlink] = useState();
    const HandleClick =(id,title,link) =>{
      setopenedit(true)
      setid(id);
      settitle(title)
      setlink(link)
    }
    const [videoUrl, setVideoUrl] = useState('');

    const handlePlayVideo = (event, url) => {
      event.preventDefault();
      setVideoUrl(url);
    };
    return (
        <>{openedit && <EditCard id={id} title={title} link = {link} heading={data.heading} onClick={()=>setopenedit(false)}/>}
        {videoUrl && (
        <YouTube videoId={videoUrl} />
      )}
            <div style={{ marginLeft:50, width:"80%", backgroundColor:'#D9F2EA',justifyContent:'space-between',padding:10, borderRadius:24}}>
            <h2>{data.heading}</h2>
            {data.data.map((item)=>(
                <div style={{display:'flex', flexDirection:'row', margin:10, backgroundColor:'#F0F0FE'}} key={item.id}>
                    <Checkbox style={{width:20}}
                        checked={data.selectedRows.includes(item.id)}
                        onChange={()=>data.handleRowSelect(item.id)}
                    />
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:'100%'}} key={item.id}>
                    <div style={{display:'flex', flexDirection:'column', padding:10}} key={item.id} onClick={(event) => handlePlayVideo(event, item.link)} >
                        <p> {item.title}</p>
                        <p>{item.link}</p>

                    </div>
                    <div style={{display:'flex', flexDirection:'column', margin:2,padding:10, justifyContent:'space-between'}}>
                        <Button variant="contained" onClick={()=>HandleClick(item.id,item.title,item.link)} style={{width:100, height:40, backgroundColor:'#7575F0', color:'white'}}>Edit</Button>
                    </div>
                    </div>
                </div>
            ))}
            </div>
        </>
    )
}

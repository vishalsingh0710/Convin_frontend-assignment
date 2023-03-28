import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getentertainmentAsync = createAsyncThunk(
    'myproject/getentertainmentAsync',
    async () => {
        const response = await fetch('http://localhost:3000/Entertainment')
        if(response.ok){
            const data = await response.json();
            console.log(data)
            return {data}
        }
    }
)

 
export const addentertainmentAsync = createAsyncThunk(
    'myproject/addEntertainmentAsyn',
    async (payload) => {
        const response = await fetch('http://localhost:3000/Entertainment',{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({title: payload.title, link:payload.link})
        })
        if(response.ok){
            const data= await response.json();
            return {data}
        }
    }
)

export const DeleteEntertainmentAsync = createAsyncThunk(
    'myproject/DeleteEntertainmentAsync',
    async (payload) => {
        const response = await fetch(`http://localhost:3000/Entertainment/${payload.id}`,{
        method:'DELETE',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({id: payload.id})
    })
        if(response.ok){
            const id= payload.id
            return {id}
        }
    }
);

export const updateEntertainmentAsync = createAsyncThunk(
    'myproject/updateEntertainmentAsync',
    async ({ id, title, link }) => {
      const response = await fetch(`http://localhost:3000/Entertainment/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, link }),
      });
  
      if (response.ok) {
        const data = await response.json();
        return { data };
      }
    }
  );


export const getEducationAsync = createAsyncThunk(
    'myproject/getEducationAsync',
    async () => {
        const response = await fetch('http://localhost:3000/Education')
        if(response.ok){
            const data = await response.json();
            return {data}
        }
    }
)


export const addeducationAsync = createAsyncThunk(
    'myproject/addeducationAsync',
    async (payload) => {
        const response = await fetch('http://localhost:3000/Education',{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({title: payload.title, link:payload.link})
        })
        if(response.ok){
            const data= await response.json();
            return {data}
        }
    }
)

export const DeleteeducationAsync = createAsyncThunk(
    'myproject/DeleteeducationAsync',
    async (payload) => {
        const response = await fetch(`http://localhost:3000/Education/${payload.id}`,{
        method:'DELETE',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({id: payload.id})
    })
        if(response.ok){
            const id= payload.id
            return {id}
        }
    }
);

export const updateEducationAsync = createAsyncThunk(
    'myproject/updateEducationAsync',
    async ({ id, title, link }) => {
      const response = await fetch(`http://localhost:3000/Education/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, link }),
      });
  
      if (response.ok) {
        const data = await response.json();
        return { data };
      }
    }
  );
 

const myslice = createSlice({
    name:"project",
    initialState:{
        education:[],
        entertainment:[]
    },
    extraReducers:{
        [getentertainmentAsync.fulfilled] : (state,action) => {
            state.entertainment = action.payload.data;
        },
        [getEducationAsync.fulfilled] : (state,action) => {
            state.education = action.payload.data;
        },
        [addeducationAsync.fulfilled] : (state,action) => {
            state.education.push(action.payload.data);
        },
        [updateEntertainmentAsync.fulfilled]: (state, action) => {
            state.entertainment = state.entertainment.map((item) => 
              item.id === action.payload.data.id ? action.payload.data : item
            );
        },
        [DeleteeducationAsync.fulfilled] : (state,action) => {
            state.education = state.education.filter(
                (item) => item.id !== action.payload.id
            );
        },
        [addentertainmentAsync.fulfilled] : (state,action) => {
            state.entertainment.push(action.payload.data);
        },
        [DeleteEntertainmentAsync.fulfilled] : (state,action) => {
            state.entertainment = state.entertainment.filter(
                (item) => item.id !== action.payload.id
            );
        },
        [updateEducationAsync.fulfilled]: (state, action) => {
            state.education = state.education.map((item) => 
              item.id === action.payload.data.id ? action.payload.data : item
            );
        },
    }
})

export default myslice.reducer
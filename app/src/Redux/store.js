import {configureStore} from '@reduxjs/toolkit'
import myslice from './Createslice'
export default configureStore({
    reducer:{
         myprojects: myslice
    }
})
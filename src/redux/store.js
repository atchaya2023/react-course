import{configure store} from '@reduxjs/toolkit'
import counterreducer from './counterreducer'

export default configureStore({
    reducer:{
      counter: counterreducer,
    }
})
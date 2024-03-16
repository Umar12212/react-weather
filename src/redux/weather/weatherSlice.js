import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    weather: null,
    key: '3c9333a1a3a40ca893996cbeb44b7022'
}

export const getLatLon = createAsyncThunk('weather/getLatLon', async(city,{getState, dispatch}) => {
    
    let {key} = getState().weather
    const res = await axios
    .get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${key}`)
    dispatch(getWeather(res.data[0]))
})

export const getWeather = createAsyncThunk('weather/getWeather', async(info,{getState}) => {
    let { lat, lon } = info
    let {key} = getState().weather
    const res = await axios
    .get(`https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${key}&units=metric&lang=ru`)
  
    return res.data
})

 



export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(getWeather.fulfilled, (state,action) => {
            state.weather = action.payload
        })
    }
})

export default weatherSlice.reducer


import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios'
import Photo from './components/Photo'
import './styles.css'

export interface IPhoto {
    copyright:string,
    date:string,
    explanation:string,
    hdurl:string,
    media_type:string,
    service_version:string,
    title:string,
    url:string
}

export interface IPhotoComponent{
  photo:IPhoto,
  key:number
}

export interface DateRange {
  startDate:string,
  endDate:string
}

export type PhotosApiPayLoad = IPhoto[]

const Main = ():JSX.Element => {

  const [ photos,setPhoto ] = useState<IPhoto[]>([])
  const [ {startDate, endDate}, setDate ] = useState<DateRange>({startDate:'',endDate:''})

  const getData = async (): Promise<void> => {
    await axios.get<PhotosApiPayLoad>(`https://api.nasa.gov/planetary/apod?api_key=9Gu6cwgUJreObBRGtdgrrcFBNRpQzuo4NJjiuPKc&start_date=${startDate}&end_date=${endDate}`)
    .then((response: AxiosResponse) => {
      setPhoto(response.data)
    })
  }

  useEffect(() => {
    getData()
  },[startDate,endDate])


  const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
    e.preventDefault()
    const {name,value} = e.target as HTMLInputElement
    setDate((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div>
      <h1>Nasa: Astronomy photo of the day!</h1>
      <div className='inputs'>
      <label>
        Enter start date
        <input type = 'date' name = 'startDate' onChange={handleChange} value = {startDate}/>
      </label>
      <label>
        Enter end date
        <input type = 'date' name ='endDate' onChange={handleChange} value = {endDate}/>
      </label>
      </div>
      <div className='photos'>
      {photos.length && photos.map((photo,index) => {
          return(
            <Photo key = {index} photo = {photo}/>
          )
      })}
      </div>
    </div>
  );
}

export default Main;
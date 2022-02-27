import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios'
import Photo from './components/Photo'

export interface State {
    url:string
}

interface DateState {
  startDate:string,
  endDate:string
}

function App():JSX.Element {

  const [ photo,setPhoto ] = useState<State>({url:''})
  const [ {startDate, endDate}, setDate ] = useState<DateState>({startDate:'',endDate:''})

  const getData = async (): Promise<void> => {
    await axios.get('https://api.nasa.gov/planetary/apod?api_key=9Gu6cwgUJreObBRGtdgrrcFBNRpQzuo4NJjiuPKc&start_date=2022-01-01&end_date=2022-02-01')
    .then((response: AxiosResponse) => {
      setPhoto(response.data)
    })
  }

  useEffect(() => {
    getData()
  },[])

  interface FormData {
    startDate: string,
    endDate:string
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
    e.preventDefault()
    const {name,value} = e.target as HTMLInputElement
    setDate((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  console.log(`start date: ${startDate} end date: ${endDate}`)

  return (
    <div>
      <label>
        Enter start date
        <input type = 'date' name = 'startDate' onChange={handleChange} value = {startDate}/>
      </label>
      <label>
        Enter end date
        <input type = 'date' name ='endDate' onChange={handleChange} value = {endDate}/>
      </label>
      <Photo url = {photo.url}/>
    </div>
  );
}

export default App;

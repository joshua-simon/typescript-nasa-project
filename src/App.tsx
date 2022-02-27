import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios'
import Photo from './components/Photo'

export interface State {
    url:string
}

function App(): JSX.Element {

  const [ photo,setPhoto ] = useState<State>({url:''})

  const getData = async (): Promise<void> => {
    await axios.get('https://api.nasa.gov/planetary/apod?api_key=9Gu6cwgUJreObBRGtdgrrcFBNRpQzuo4NJjiuPKc')
    .then((response: AxiosResponse) => {
      setPhoto(response.data)
    })
  }

  console.log(photo)
  useEffect(() => {
    getData()
  },[])

  return (
    <div>
      <Photo url = {photo.url}/>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios'

function App(): JSX.Element {

  interface State {
      url:string
  }

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
      <p>{photo.url}</p>
    </div>
  );
}

export default App;

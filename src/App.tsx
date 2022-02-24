import React, { useEffect, useState } from 'react';
import axios from 'axios'

function App() {

  interface State {
      url:string
  }

  const [ photo,setPhoto ] = useState<State>({
    url:''
  })


  const getData = async (): Promise<void> => {
    await axios.get('https://api.nasa.gov/planetary/apod?api_key=9Gu6cwgUJreObBRGtdgrrcFBNRpQzuo4NJjiuPKc')
    .then(response => {
      setPhoto({url: response.data.url})
    })
  }

  console.log(`this is photo: ${photo}`)

  useEffect(() => {
    getData()
  },[])

  return (
    <div>
      <img src = {photo.url}/>
    </div>
  );
}

export default App;

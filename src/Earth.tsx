import { useState, useEffect,FC } from "react"
import axios, { AxiosResponse } from "axios"

const Earth = ():JSX.Element => {

    interface IEarth {
        date:string,
        id:string,
        resource:{
            dataset:string,
            planet:string
        }
        service_version: string,
        url: string
    }

    // type PhotoPayload = IEarth[]

    const [data,setData] = useState<IEarth>()
    const url = 'https://api.nasa.gov/planetary/earth/assets?lon=-95.33&lat=29.78&date=2018-01-01&&dim=0.10&api_key=DEMO_KEY'

    const getData = ():void => {
        axios.get(url)
        .then((res: AxiosResponse) => {
            setData(res.data)
        })
    }

    useEffect(() => {
        getData()
    },[])

    console.log('data', data)

    return(
        <div>
            {data?.url}
        </div>
    )
}

export default Earth
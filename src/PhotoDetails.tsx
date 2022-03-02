import React, {FC, useState, useEffect} from 'react'
import { useParams, useLocation} from 'react-router-dom'
import {IPhoto} from './Main'

const PhotoDetails:FC= ():JSX.Element => {

    const [ photoDetails,setPhotoDetails ] = useState<IPhoto>()

    type PhotoParams = {
        id:string
    }

    const {id} = useParams<PhotoParams>()
    
    const {state} = useLocation() as any
    //this needs to be assigned a type other than 'any'

    useEffect(() => {
        setPhotoDetails(state)
    },[])

    return(
        <div>
            <h1>{photoDetails?.title}</h1>
            <h2>{photoDetails?.copyright}</h2>
            <p>{photoDetails?.explanation}</p>
        </div>
    )
}

export default PhotoDetails
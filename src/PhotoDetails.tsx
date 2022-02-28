import React, {FC} from 'react'
import { useParams, Params } from 'react-router-dom'

const PhotoDetails:FC = ():JSX.Element => {

    type PhotoParams = {
        id:string
    }
    
    const {id} = useParams<PhotoParams>()
    console.log(`this is id: ${id}`)

    return(
        <div>
            this is photo details
        </div>
    )
}

export default PhotoDetails
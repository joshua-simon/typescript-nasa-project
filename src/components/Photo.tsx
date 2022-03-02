import {FC} from 'react'
import {IPhotoComponent} from '../Main'
import { Link } from 'react-router-dom'

const Photo:FC<IPhotoComponent> = ({children, photo}):JSX.Element  => {


    return(
        <div className='photo'>
            <Link to = {`/photo/${photo.date}`} state = {photo}>
                <img src = {photo.url} />
            </Link>
        </div>
    )
}

export default Photo


import {FC} from 'react'
import {IPhotoComponent} from '../App'

const Photo:FC<IPhotoComponent> = ({children, photo}):JSX.Element  => {
    
    return(
        <div className='photo'>
            <img src = {photo.url} />
        </div>
    )
}

export default Photo


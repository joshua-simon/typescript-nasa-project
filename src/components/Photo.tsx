import {FC} from 'react'
import {State} from '../App'

const Photo:FC<State>= ({url}):JSX.Element  => {
    
    return(
        <div>
            <img src = {url}/>
        </div>
    )
}

export default Photo
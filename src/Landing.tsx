import {FC} from 'react'
import { Link } from 'react-router-dom'


const Landing:FC = () => {
    return(
        <div>
            <Link to = '/main'>Photo of the day</Link>
        </div>
    )
}

export default Landing
import {FC} from 'react'
import { Link } from 'react-router-dom'


const Landing:FC = () => {
    return(
        <div>
            <Link to = '/main'>Astronomy photo of the day</Link> <br></br>
            <Link to = '/earth'>Earth photo of the day</Link>
        </div>
    )
}

export default Landing
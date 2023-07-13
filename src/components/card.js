import React from 'react';
import { Link} from "react-router-dom";

const Card = ({ header, body}) => {
    return(
        <div>
            <Link to={`/pokemon/${header}`}>{header}</Link>
            <img src={body}></img>
        </div>
    )
}

export default Card
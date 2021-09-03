import React from 'react';
import { Link } from 'react-router-dom';

const Cards = (props) => {
    return (
        <div className="card">   
                
                    <img className="card-img-top" src={props.image} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{props.data.name}</h5>
                        <p className="card-text">{props.data.url}</p>
                        <Link to="#" className="btn btn-primary">Learn more</Link>
                    </div>
                   
        </div>
    )
}

export default Cards;


            //  {JSON.stringify(props.data)}
            //{props.data.name}
         
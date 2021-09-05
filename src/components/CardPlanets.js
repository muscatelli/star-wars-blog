import React from 'react';
import { Link } from 'react-router-dom';

const CardPlanets = (props) => {
    



    return (
        <div className="card">


            <div className="card-body">
                <img className="card-img-top" src={props.image} alt="Card image cap" />
                
                <h5 className="card-title">{props.data.name}</h5>
                <p className="card-text">Terrain: {props.data.terrain}</p>
                <p className="card-text">{props.data.url}</p>
                <Link to="#" className="btn btn-primary">Learn more</Link>
                <button className="btn btn-outline-warning"><i class="bi bi-heart"></i></button>
            </div>

        </div>
    )
}

export default CardPlanets;


            //  {JSON.stringify(props.data)}
            //{props.data.name}

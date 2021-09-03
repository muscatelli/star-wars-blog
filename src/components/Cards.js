import React from 'react';
import { Link } from 'react-router-dom';

const Cards = (props) => {
    return (
        <div className="card">


            <div className="card-body">
                <img className="card-img-top" src={props.image} alt="Card image cap" />
                <h5 className="card-title">{props.data.name}</h5>
                <p className="card-text">{props.data.url}</p>
                <p className="card-text">Terrain: {props.data.terrain}</p>
                <p className="card-text">Model: {props.data.model}</p>
                <p className="card-text">Gender: {props.data.gender}</p>
                <p className="card-text">Eye Color: {props.data.eye_color}</p>
                <p className="card-text">Hair Color: {props.data.hair_color}</p>
                <Link to="#" className="btn btn-primary">Learn more</Link>
            </div>

        </div>
    )
}

export default Cards;


            //  {JSON.stringify(props.data)}
            //{props.data.name}

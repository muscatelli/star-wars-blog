import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const CardPlanets = (props) => {

    const { store, actions } = useContext(Context);


    return (
        <div className="card">


            <div className="card-body">
                <img className="card-img-top" src={props.image} alt="Card image cap" />

                <h5 className="card-title">{props.data.name}</h5>
                <p className="card-text">Terrain: {props.data.terrain}</p>
                <p className="card-text">Diameter:{props.data.diameter}</p>
                <p className="card-text">Climate:{props.data.climate}</p>
                <p className="card-text">Rotation Period:{props.data.rotation_period}</p>
                <p className="card-text">Orbital Period:{props.data.orbital_period}</p>
                <p className="card-text">Population::{props.data.population}</p>
                <p className="card-text">{props.data.url}</p>
                <Link to={`/Planetsinfo/${props.data.url.match(/\d/g)}`} className="btn btn-primary">Learn more</Link>
                <button className="btn btn-outline-warning"><i class="bi bi-heart"></i></button>
            </div>

        </div>
    )
}

export default CardPlanets;



import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const CardVehicles = (props) => {

    const { store, actions } = useContext(Context);
    return (
        <div className="card">


            <div className="card-body">
                <img className="card-img-top" src={props.image} alt="Card image cap" />

                <h5 className="card-title">{props.data.name}</h5>
                <p className="card-text">{props.data.url}</p>
                <p className="card-text">Model: {props.data.model}</p>
                <p className="card-text">Manufacturer: {props.data.manufacturer}</p>
                <p className="card-text">Cost In Credits: {props.data.cost_in_credits}</p>
                <p className="card-text">Passengers: {props.data.passengers}</p>
                <Link to={`/Vehiclesinfo/${props.data.url.match(/\d/g)}`} className="btn btn-primary">Learn more</Link>
                <button className="btn btn-outline-warning"><i class="bi bi-heart"></i></button>
            </div>

        </div>
    )
}

export default CardVehicles;
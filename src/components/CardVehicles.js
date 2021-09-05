import react from 'react';
import { Link } from 'react-router-dom';

const CardVehicles = (props) => {
    return (
        <div className="card">


            <div className="card-body">
                <img className="card-img-top" src={props.image} alt="Card image cap" />

                <h5 className="card-title">{props.data.name}</h5>
                <p className="card-text">{props.data.url}</p>
                <p className="card-text">Model: {props.data.model}</p>
                <Link to="#" className="btn btn-primary">Learn more</Link>
                <button className="btn btn-outline-warning"><i class="bi bi-heart"></i></button>
            </div>

        </div>
    )
}

export default CardVehicles;
import react from 'react';
import { Link } from 'react-router-dom';

const CardPeople  = (props) => {
    return (
        <div className="card">


            <div className="card-body">
                <img className="card-img-top" src={props.image} alt="Card image cap" />

                <h5 className="card-title">{props.data.name}</h5>
                <p className="card-text">{props.data.url}</p>
                <p className="card-text">Gender: {props.data.gender}</p>
                <p className="card-text">Eye Color: {props.data.eye_color}</p>
                <p className="card-text">Hair Color: {props.data.hair_color}</p>
                <Link to="#" className="btn btn-primary">Learn more</Link>
                <i class="bi bi-heart"></i>
            </div>

        </div>
    )
}

export default CardPeople;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from "../store/appContext";


const CardPeople = (props) => {

    const { store, actions } = useContext(Context);
    const addToList = () => {
        let nameFav = props.data.name;
        console.log(nameFav);
        actions.addFavorite(nameFav);
    }



    return (
        <div className="card">


            <div className="card-body">
                <img className="card-img-top" src={props.image} alt="Card image cap" />

                <h5 className="card-title">{props.data.name}</h5>
                <p className="card-text">{props.data.url}</p>
                <p className="card-text">Gender: {props.data.gender}</p>
                <p className="card-text">Eye Color: {props.data.eye_color}</p>
                <p className="card-text">Hair Color: {props.data.hair_color}</p>
                <Link to={`/Peopleinfo/${props.data.url.match(/\d+/g)}`} className="btn btn-primary">Learn more</Link>
                <button className="bi bi-heart btn btn-warning ms-2" onClick={() => addToList()}></button>

            </div>

        </div>
    )
}

export default CardPeople;
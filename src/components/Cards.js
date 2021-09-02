import React from 'react';
import { Link } from 'react-router-dom';

const Cards = (props) => {
    return (
        <div className="container card">
          {props.data.name}
            
        </div>
    )
}

export default Cards;

/*
<div className="row">
            <div className="card col-md-3" >
                <img className="card-img-top" src="https://isccoquimbo.cl/images/400X200.gif" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="#" className="btn btn-primary">Go somewhere</Link>
                </div>
            </div>
            </div>



            <div className="row">
                <div className="card col-md-3" >
                    <img className="card-img-top" src="https://isccoquimbo.cl/images/400X200.gif" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.url}</p>
                        <Link to="#" className="btn btn-primary">Learn more</Link>
                    </div>
                </div>
            </div>
            */


            //  {JSON.stringify(props.data)}
            //{props.data.name}

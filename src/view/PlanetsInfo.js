import React from 'react';
import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';
import { Context } from "../store/appContext";



const Planetsinfo = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.getPlanetainfo(params.id)
    }, [])

    return (
        <div className="container-fluid">
            <h1>Planets</h1>
            <div className="mt-3 pb-3 pt-3">

                <h5 className="card-title">{store.info.name}</h5>
                <p className="card-text">{store.info.diameter}</p>
                <p className="card-text">{store.info.population}</p>
                <p className="card-text">{store.info.climate}</p>
                <p className="card-text">{store.info.terrain}</p>
                <div className="col-md-4"> </div>
            </div>
        </div>
    )
}



export default Planetsinfo;




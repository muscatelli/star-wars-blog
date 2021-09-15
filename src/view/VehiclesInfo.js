import React from 'react';
import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';
import { Context } from "../store/appContext";



const Vehiclesinfo = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.getVehiclesinfo(params.id)
    }, [])

    return (
        <div className="container-fluid">
            <h1>Vehicles</h1>
            <div className="mt-3 pb-3 pt-3">

                <h5 className="card-title">{store.info.name}</h5>
                <p className="card-text">{store.info.starship_class}</p>
                <p className="card-text">Model: {store.info.model}</p>
                <p className="card-text">Model: {store.info.cost_in_credits}</p>
                <div className="col-md-4"> </div>
            </div>
        </div>
    )
}



export default Vehiclesinfo;


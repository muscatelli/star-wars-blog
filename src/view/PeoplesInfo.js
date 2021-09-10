import React from 'react';
import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';
import { Context } from "../store/appContext";



const Peoplesinfo = ( ) => {
    const { store, actions } = useContext(Context);
    const params = useParams ();

    useEffect(()=> {
        actions.getPeopleinfo(params.id)
    }, [])

    return(
        <div className="container-fluid">
                <h1>Peoples</h1>
                <div className="mt-3 pb-3 pt-3">
                <h5 className="card-title">{store.info.name}</h5>
                <p className="card-text">Gender: {store.info.gender}</p>
                <p className="card-text">Eye Color: {store.info.eye_color}</p>
                <p className="card-text">Hair Color: {store.info.hair_color}</p>
                </div>       
            </div>
    )
}

export default Peoplesinfo;


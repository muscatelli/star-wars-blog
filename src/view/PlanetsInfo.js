import React from 'react';
import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';
import { Context } from "../store/appContext";
import CardPlanets from '../components/CardPlanets';


const Planetsinfo = ( ) => {
    const { store, actions } = useContext(Context);
    const params = useParams ();
    
    useEffect(()=> {
        actions.getPlanetainfo(params.id)
    }, [])
    
    return(
        <div className="container-fluid">
                <h1>Planets</h1>
                <div className="mt-3 pb-3 pt-3">
                    {store.info.name}
                 <div className="col-md-4"> </div>
                </div>
            </div>
    )
}



export default Planetsinfo;
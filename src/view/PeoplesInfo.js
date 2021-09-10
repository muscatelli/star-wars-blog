import React from 'react';
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';
import { Context } from "../store/appContext";
import CardPeople from '../components/CardPeople';


const Peoplesinfo = ( ) => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getPlanets();

    }, [])
    return(
        <div className="container-fluid">
                <h1>Peoples</h1>
                <div className="scrolling-wrapper row flex-row flex-nowrap mt-3 pb-3 pt-3">
                    {store.peoples.map((people, i) => <div className="col-md-4"> <CardPeople data={people} image="https://isccoquimbo.cl/images/400X200.gif" /></div>)}
                </div>
            </div>
    )
}

export default Peoplesinfo;
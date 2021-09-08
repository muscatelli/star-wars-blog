import React from 'react';


const PlanetsInfo = ( ) => {
    return (
        <div class="container-fluid">
        <h1>Planets</h1>
       {store.getPlanets.map(planet => {planet.name}) }
    </div> 
    )

}

export default PlanetsInfo;   
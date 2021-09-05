import React, { useEffect, useState } from "react";
import CardPlanets from '../components/CardPlanets';
import CardVehicles from '../components/CardVehicles';
import CardPeople from "../components/CardPeople";
//import { useState } from "react";

const Home = () => {
    const [planets, setPlanets] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [people, setPeople] = useState([]);

    //Planetas
    useEffect(() => {
        fetch("https://swapi.dev/api/planets/", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }).then(response => response.json())
            .then(data => setPlanets(data.results))
    }, [])

    //Vehicle
    useEffect(() => {
        fetch("https://swapi.dev/api/vehicles/", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }).then(response => response.json())
            .then(data => setVehicles(data.results))
    }, [])

    //People
    useEffect(() => {
        fetch("https://swapi.dev/api/people/", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }).then(response => response.json())
            .then(data => setPeople(data.results))
    }, [])

    return (
        <>
            <div class="container-fluid">
                <h1>Planets</h1>
                <div className="scrolling-wrapper row flex-row flex-nowrap mt-3 pb-3 pt-3">
               {planets.map((planet, i) =><div className="col-md-4"> <CardPlanets data={planet} image= "https://isccoquimbo.cl/images/400X200.gif" /></div>)}   
                </div>
            </div>

            <div class="container-fluid">
                <h1>Vehicles</h1>
                <div className="scrolling-wrapper row flex-row flex-nowrap mt-3 pb-3 pt-3">
               {vehicles.map((vehicle, i) =><div className="col-md-4"> <CardVehicles data={vehicle} image= "https://isccoquimbo.cl/images/400X200.gif" /></div>)}   
                </div>
            </div>

            <div class="container-fluid">
                <h1>Peoples</h1>
                <div className="scrolling-wrapper row flex-row flex-nowrap mt-3 pb-3 pt-3">
               {people.map((people, i) =><div className="col-md-4"> <CardPeople data={people} image= "https://isccoquimbo.cl/images/400X200.gif"/></div>)}   
                </div>
            </div>
        </>
    );
}


export default Home;
/*



             <div className="row">

                <h1>Characters</h1>
                <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2 mb-4">
                    {planets.map((planet, i) => <div className="col-md-3"><Card data={planet} image="https://isccoquimbo.cl/images/400X200.gif" /></div>)}
                </div>
            </div>


            <h1>Planets</h1>
                    <div>{planets.map((planet, i) => <Card data={planet} />)}</div>

*/

/*
<div class="container-fluid">
    <h1>Planets</h1>
    <div class="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
    </div>
</div>
			
			<div class="col-5">
				<div class="card card-block card-1"></div>
			</div>
			<div class="col-5">
				<div class="card card-block card-2"></div>
			</div>
			<div class="col-5">
				<div class="card card-block card-3"></div>
			</div>

             <h1>Vehicles</h1>
            <div>{vehicles.map((vehicle, i) => <Card data={vehicle} />)}</div>

            <h1>Peoples</h1>
            <div>{people.map((people, i) => <Card data={people} />)}</div>

            */
import React, { useEffect, useState, useContext } from "react";
import CardPlanets from '../components/CardPlanets';
import CardVehicles from '../components/CardVehicles';
import CardPeople from "../components/CardPeople";
import { Context } from "../store/appContext";

const Home = () => {

   
    const { store, actions } = useContext(Context);

    //Planetas
    useEffect(() => {
        actions.getPlanets();

    }, [])

    //Vehicles
    useEffect(() => {
        actions.getVehicles();

    }, [])

    //Peoples
    useEffect(() => {
        actions.getPeoples();

    }, [])




    return (
        <>
            <div className="container-fluid">
                <h1>Planets</h1>
                <div className="scrolling-wrapper row flex-row flex-nowrap mt-3 pb-3 pt-3">
                    {store.planets.map((planet, i) => <div className="col-md-4"> <CardPlanets data={planet} image="https://isccoquimbo.cl/images/400X200.gif" /></div>)}
                </div>
            </div>

            <div className="container-fluid">
                <h1>Vehicles</h1>
                <div className="scrolling-wrapper row flex-row flex-nowrap mt-3 pb-3 pt-3">
                    {store.vehicles.map((vehicle, i) => <div className="col-md-4"> <CardVehicles data={vehicle} image="https://isccoquimbo.cl/images/400X200.gif" /></div>)}
                </div>
            </div>

            <div className="container-fluid">
                <h1>Peoples</h1>
                <div className="scrolling-wrapper row flex-row flex-nowrap mt-3 pb-3 pt-3">
                    {store.peoples.map((people, i) => <div className="col-md-4"> <CardPeople data={people} image="https://isccoquimbo.cl/images/400X200.gif" /></div>)}
                </div>
            </div>


        </>
    );
}
// {store.planets.map((planet) => <p>{planet.name}</p>) }

export default Home;

 /*
    const [planets, setPlanets] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [people, setPeople] = useState([]);
    */

 /* 
<div className="scrolling-wrapper row flex-row flex-nowrap mt-3 pb-3 pt-3">
{planets.map((planet, i) =><div className="col-md-4"> <CardPlanets data={planet} image= "https://isccoquimbo.cl/images/400X200.gif" /></div>)}
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
*/
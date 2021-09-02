import React, {useEffect,useState} from "react";
import Card from '../components/Cards';
//import { useState } from "react";

const Home = () => {
    const [planets, setPlanets] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [people, setPeople] = useState([]);

    //Planetas
    useEffect(()=> {
        fetch("https://swapi.dev/api/planets/", {
            method:"GET",
            headers: {"Content-Type": "application/json"}
        }).then(response => response.json())
        .then(data => setPlanets(data.results))
    }, [])

    //Vehicle
    useEffect(()=> {
    fetch("https://swapi.dev/api/vehicles/", {
            method:"GET",
            headers: {"Content-Type": "application/json"}
        }).then(response => response.json())
        .then(data => setVehicles(data.results))
    }, [])
    
    //People
    useEffect(()=> {
        fetch("https://swapi.dev/api/people/", {
                method:"GET",
                headers: {"Content-Type": "application/json"}
            }).then(response => response.json())
            .then(data => setPeople(data.results))
        }, [])

    return (
        <>
            <h1>Cards</h1>
       <div>{planets.map((planet, i) => <Card data={planet}/>)}</div>
        
        
        </>
    );
}


export default Home;
/*
{vehicles.map((vehicles, i) => <Card data={vehicles}/>)}
        {people.map((people, i) => <Card data={people}/>)}
        
        */
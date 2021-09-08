export const getState = ({ setStore, getStore, getActions }) => {

    return {
        store: {
           planets: [] ,
           vehicles: [] ,
           peoples:[]
        },
        actions: {
           getPlanets: () => {
            fetch("https://swapi.dev/api/planets/", {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            }).then(response => response.json())
                .then(data => setStore({ planets:data.results }))
           },

           getVehicles: () => {
            fetch("https://swapi.dev/api/vehicles/", {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            }).then(response => response.json())
                .then(data => setStore({ vehicles:data.results }))
           },

           getPeoples: () => {
            fetch("https://swapi.dev/api/planets/", {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            }).then(response => response.json())
                .then(data => setStore({ peoples:data.results }))
           },


        }
    };

}

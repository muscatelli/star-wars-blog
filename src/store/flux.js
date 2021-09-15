export const getState = ({ setStore, getStore, getActions }) => {

    return {
        store: {
            planets: [],
            vehicles: [],
            peoples: [],
            info: {},
            favoriteList: [],
        },
        actions: {
            getPlanets: () => {
                fetch("https://swapi.dev/api/planets/", {
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                }).then(response => response.json())
                    .then(data => setStore({ planets: data.results }))
            },

            getVehicles: () => {
                fetch("https://swapi.dev/api/vehicles/", {
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                }).then(response => response.json())
                    .then(data => setStore({ vehicles: data.results }))
            },

            getPeoples: () => {
                fetch("https://swapi.dev/api/people/", {
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                }).then(response => response.json())
                    .then(data => setStore({ peoples: data.results }))
            },

            getInfo: (data) => {
                setStore({ info: data })
            },

            getPlanetainfo: (inf) => {
                const actions = getActions();
                let url = 'https://swapi.dev/api/planets/' + inf;

                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        actions.getInfo(data);
                    })
            },

            getPeopleinfo: (peo) => {
                const actions = getActions();
                let url = 'https://swapi.dev/api/people/' + peo;

                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        actions.getInfo(data);
                    })
            },

            getVehiclesinfo: (veh) => {
                const actions = getActions();
                let url = 'https://swapi.dev/api/starships/' + veh;

                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        actions.getInfo(data);
                    })
            },

            addFavorite: (item) => {
                const store = getStore();
                const actions = getActions();
                if (!store.favoriteList.includes(item)) {
					setStore({ favoriteList: [...store.favoriteList, item] });
				} else {
					const array = store.favoriteList;
					const condition = currentFavorite => currentFavorite === item;
					let index = array.findIndex(condition);
					if (index > -1) actions.removeFavorite(index);
				}
            },
            removeFavorite: favoriteIndex => {
                const store = getStore();
				store.favoriteList.splice(favoriteIndex, 1);
                setStore({ favoriteList: store.favoriteList });
			},


        }
    };

}

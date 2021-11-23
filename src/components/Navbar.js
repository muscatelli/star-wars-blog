import React from 'react';
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import {  useContext } from "react";

const Navbar = () => {

  const { store, actions } = useContext(Context);
    

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img src="https://www.gamerfocus.co/wp-content/uploads/2018/03/Star-Wars-Logo.png" style={{ height: "2em", margin: "auto", padding: "0px 0px 5px 0px" }} /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

       <div class="dropdown">
                <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuClickable" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
                    Favorites<span class="badge bg-secondary">{store.favoriteList.length}</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuClickable">
                    {store.favoriteList.map((favorite, index) => {
                        return (<li className="container-fluid d-flex justify-content-evenly"><button className="dropdown-item" key={index}>{favorite}</button>
                        <i className="fas fa-trash-alt" style={{ cursor: 'pointer' }} onClick={() => {
                            actions.removeFavorites(index);
                        }}></i>
                            </li>)
                    })
                    }
                </ul>

            </div> 
       
      </div>
    </nav>
  )
}
export default Navbar;


/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img src="https://www.gamerfocus.co/wp-content/uploads/2018/03/Star-Wars-Logo.png" style={{ height: "2em", margin: "auto", padding: "0px 0px 5px 0px" }} /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto btn btn-primary">
           <li className="nav-item dropdown">
              <button className="nav-link dropdown-toggle text-light" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Favorites <span class="badge bg-secondary">{store.favoriteList.length}</span>
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              {store.favoriteList.map((favorite, index) => {
                        return (<li className="container-fluid d-flex justify-content-evenly"><button className="dropdown-item" key={index}>{favorite}</button>
                        <i className="fas fa-trash-alt" style={{ cursor: 'pointer' }} onClick={() => {
                            actions.deleteElement(index);
                        }}></i>
                            </li>)
                    })
                    }
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>*/
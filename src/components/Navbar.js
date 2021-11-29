import React from 'react';
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";

const Navbar = (props) => {

  const { store, actions } = useContext(Context);
  const delate = (d) => {
    actions.removeFavorite(d);
  }


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <Link className="navbar-brand" to="/">
        <img src="https://www.gamerfocus.co/wp-content/uploads/2018/03/Star-Wars-Logo.png" style={{ height: "2em", margin: "auto", padding: "0px 0px 5px 0px" }} />
      </Link>

      <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuClickable" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
          Favorites<span class="badge bg-secondary">{store.favoriteList.length}</span>
        </button>
        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuClickable">
          {store.favoriteList.map((favorite, index) => {
            return (<li className="container d-flex justify-content-evenly"><button className="dropdown-item" key={index}>{favorite}</button>
              <span className="ps-5"><button onClick={() => { delate(index) }} >  <i className="bi bi-trash-fill"></i></button></span></li>)
          })
          }

        </ul>

      </div>
    </nav>
  )
}
export default Navbar;

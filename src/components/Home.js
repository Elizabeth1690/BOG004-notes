import React from "react";
/*import ReactDOM from 'react-dom/client';*/
import "./Home.css";
/*import App from './App';*/
import { loginGoogle } from "../controler/firebase-controler";

const Home = () => {
  return (
    <div className="container-padre">
      <div className="container-home">
        <div className="container-paragraph-one">
          <p>
            Que no se te olvide anotar las fechas especiales, los links
            importantes, las reuniones de trabajo, las citas médicas, entre
            otras.
          </p>
        </div>
        <div className="container-paragraph-two">
          <p>¡ Escribelas ya !</p>
        </div>
        <button className="btn-google" onClick={() => loginGoogle()}>
          Conectar con Google
        </button>
      </div>
    </div>
  );
};

export default Home;

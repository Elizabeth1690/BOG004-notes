import React from "react";
import "./Home.css";
import "./Notes.js";
import { loginGoogle } from "../controler/firebase-controler";

export default function Home() {
  return (
    <div className="container-main">
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
          <img
            className="img-hand"
            src="https://i.imgur.com/mpgK23k.png"
            alt="mano apuntando hacía abajo"
          />
        </div>
        <button className="btn-google" onClick={() => loginGoogle()}>
          Conectar con Google
          <img
            className="img-google"
            src="https://i.imgur.com/8VcogJn.png"
            alt="Google"
          />
        </button>
      </div>
    </div>
  );
}

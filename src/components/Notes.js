import React from "react";
import "./Notes.css";
import "./Home.js";

const Notes = () => {
  return (
    <div className="container-padre-notas">
      <div>
        <h1 className="title-notes">" ¡ Recordar es vivir!"</h1>
      </div>
      <button className="cerrar" onClick={() => (window.location.href = "/")}>
        cerar sesión
      </button>
      <div>
        <textarea className="tarea"></textarea>
      </div>
    </div>
  );
};

export default Notes;

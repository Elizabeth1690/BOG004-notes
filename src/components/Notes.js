import { useEffect, useState } from "react";
import "./Notes.css";
import "./Home.js";
import {
  addNotes,
  getNotes,
  deleteNotes,
  /* updateNote,*/
  getNote,
} from "../controler/firebase.js";
const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    consultNotes();
  }, []);

  const formNotes = (e) => {
    e.preventDefault();
    console.log(e.target.titleNotes.value);
    const title = e.target.titleNotes.value;
    const description = e.target.descriptionNotes.value;
    addNotes(title, description);
    consultNotes();
    /*e.reset();*/
  };

  const consultNotes = async () => {
    const n = await getNotes();
    setNotes(n.docs);
  };

  const removeNotes = async (noteId) => {
    console.log(noteId);
    await deleteNotes(noteId);
    consultNotes();
  };

  /*const noteUpdate = async (noteId, titleData, descriptionData) => {
    await updateNote(noteId, titleData, descriptionData);
  };*/

  const consultNote = async (e) => {
    const doc = await getNote(e.target.dataset.id);
    const note = doc.data();
    e.target.titleNotes.value = note.title;
    e.target.descriptionNotes.value = note.description;
  };

  return (
    <div className="container-main-notes">
      <h2 className="title">" ¡ Recordar es vivir !"</h2>
      <button
        className="btn-signOut"
        onClick={() => (window.location.href = "/")}
      >
        X
      </button>

      <div className="container-notes">
        <form id="form-notes" onSubmit={formNotes}>
          <input
            type="text"
            placeholder="Escribe el titulo"
            className="title-notes"
            id="titleNotes"
            name="titleNotes"
          />
          <textarea
            className="description "
            id="descriptionNotes"
            name="descriptionNotes"
            placeholder="Escribe la descripción"
          ></textarea>
          <button type="submit" id="btn-save">
            Guardar
          </button>
        </form>
        {notes &&
          notes.map((note) => {
            const noteId = note.id;
            const titleData = note.data().title;
            const descriptionData = note.data().description;
            return (
              <div key={noteId}>
                <p>{titleData}</p>
                <p>{descriptionData}</p>
                <button onClick={() => removeNotes(noteId)}>Eliminar</button>
                <button onClick={() => consultNote(noteId)}>Editar</button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Notes;

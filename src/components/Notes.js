import { useEffect, useState } from "react";
import "./Notes.css";
import "./Home.js";
import {
  addNotes,
  getNotes,
  deleteNotes,
  updateNote,
  getNote,
} from "../controler/firebase.js";
const Notes = () => {
  const [notes, setNotes] = useState([]);

  const [noteTitle, setNoteTitle] = useState("");
  const [readOnly, setReadOnly] = useState(true);
  const [noteDescription, setNoteDescription] = useState("");
  const [noteIdEdit, setNoteIdEdit] = useState("");

  useEffect(() => {
    consultNotes();
  }, []);

  /*useEffect(() => {
    if (idEdit === "") {
     
    } else {
      consultNote(idEdit);
      console.log("biennnnnn", idEdit);
    }
  }, [idEdit]);*/

  const formNotes = (e) => {
    e.preventDefault();
    console.log(e.target.titleNotes.value);
    const title = e.target.titleNotes.value;
    const description = e.target.descriptionNotes.value;
    addNotes(title, description);
    consultNotes();
  };

  const consultNotes = async () => {
    const n = await getNotes();
    setNotes(n.docs);
  };

  const removeNotes = async (noteId) => {
    console.log("holaaaaaaaaaaaaa");
    await deleteNotes(noteId);
    consultNotes();
  };

  const editNotes = (id, titleData, descriptionData) => {
    console.log(id);
    setNoteIdEdit(id);
    setNoteDescription(descriptionData);
    setNoteTitle(titleData);
  };

  const handleUpdate = async (noteId) => {
    await updateNote(noteId, noteTitle, noteDescription);
    setReadOnly(true);
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
          <button className="btn-save " type="submit" id="btn-save">
            Guardar
          </button>
        </form>
        {notes &&
          notes.map((note) => {
            const noteId = note.id;
            const titleData = note.data().title;
            const descriptionData = note.data().description;
            return (
              <div className="container-notes-save" key={noteId}>
                <textarea
                  readOnly={noteId !== noteIdEdit}
                  id="titleSave"
                  name="titleSave"
                  onChange={(e) => setNoteTitle(e.target.value)}
                >
                  {titleData}
                </textarea>
                <textarea
                  readOnly={noteId !== noteIdEdit}
                  className="description "
                  id="descriptionSave"
                  name="descriptionSave"
                  onChange={(e) => setNoteDescription(e.target.value)}
                >
                  {descriptionData}
                </textarea>
                <div className="container-btns">
                  <button
                    className="btn-delete"
                    onClick={() => removeNotes(noteId)}
                  >
                    Eliminar
                  </button>
                  <button
                    className="btn-edit "
                    onClick={
                      readOnly
                        ? (e) => editNotes(noteId, titleData, descriptionData)
                        : () => handleUpdate(noteId)
                    }
                  >
                    {readOnly ? "Editar" : "Guardar"}
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Notes;

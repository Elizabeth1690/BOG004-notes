import { useEffect, useState } from "react";
import "./Notes.css";
import ListNotes from "./ListNotes.js";
import { useNavigate } from "react-router-dom";
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
  const [activateReadOnly, setActivateReadOnly] = useState(true);
  const [noteDescription, setNoteDescription] = useState("");
  const [noteIdEdit, setNoteIdEdit] = useState("");

  let navigate = useNavigate();
  useEffect(() => {
    consultNotes();
  }, []);

  const formNotes = (e) => {
    e.preventDefault();
    const title = e.target.titleNotes.value;
    const description = e.target.descriptionNotes.value;
    addNotes(title, description);
    consultNotes();
    e.target.reset();
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
    setActivateReadOnly(false);
  };

  const handleUpdate = async (noteId) => {
    await updateNote(noteId, noteTitle, noteDescription);
    setNoteIdEdit(false);
    setActivateReadOnly(true);
  };

  return (
    <div className="container-main-notes">
      <h2 className="title">" ¡ Recordar es vivir !"</h2>
      <button
        className="btn-signOut"
        onClick={() => {
          navigate("/");
        }}
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
              <ListNotes
                key={noteId}
                noteId={noteId}
                noteIdEdit={noteIdEdit}
                titleData={titleData}
                descriptionData={descriptionData}
                activateReadOnly={activateReadOnly}
                editNotes={() => editNotes(noteId, titleData, descriptionData)}
                handleUpdate={() => handleUpdate(noteId)}
                removeNotes={() => removeNotes(noteId)}
                setNoteTitle={(e) => setNoteTitle(e.target.value)}
                setNoteDescription={(e) => setNoteDescription(e.target.value)}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Notes;

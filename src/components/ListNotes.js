export default function ListNotes({
  noteId,
  noteIdEdit,
  setNoteTitle,
  titleData,
  setNoteDescription,
  descriptionData,
  removeNotes,
  editNotes,
  handleUpdate,
  activateReadOnly,
}) {
  return (
    <div className="container-notes-save">
      <textarea
        readOnly={noteId !== noteIdEdit}
        id="titleSave"
        name="titleSave"
        onChange={setNoteTitle}
      >
        {titleData}
      </textarea>
      <textarea
        readOnly={noteId !== noteIdEdit}
        className="description "
        id="descriptionSave"
        name="descriptionSave"
        onChange={setNoteDescription}
      >
        {descriptionData}
      </textarea>
      <div className="container-btns">
        <button className="btn-delete" onClick={removeNotes}>
          Eliminar
        </button>
        <button
          className="btn-edit "
          onClick={activateReadOnly ? editNotes : handleUpdate}
        >
          {activateReadOnly ? "Editar" : "Guardar"}
        </button>
      </div>
    </div>
  );
}

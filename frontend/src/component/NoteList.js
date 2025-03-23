import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BASE_URL } from "../utils";

const NoteList = () => {
  const [notes, setNote] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    const response = await axios.get(`${BASE_URL}/notes`);
    setNote(response.data);
  };

  const deleteNote = async (id) =>{
    try {
        await axios.delete(`${BASE_URL}/${id}`);
        getNotes();
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div className="container mt-5 has-text-centered">
      <h1 className="title is-2">Notes</h1>
      <div className="columns is-centered">
        <div className="column is-half">
          <table className="table is-striped is-fullwidth">
            <thead>
              <tr>
                <th className="has-text-centered">Judul</th>
                <th className="has-text-centered">Isi</th>
                <th className="has-text-centered">Actions</th>
              </tr>
            </thead>
            <tbody>
              {notes.map((note) => (
                <tr key={note.id}>
                  <td>{note.judul}</td>
                  <td>{note.isi}</td>
                  <td>
                    <Link
                      to={`edit/${note.id}`}
                      className="button is-small is-info mr-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteNote(note.id)}
                      className="button is-small is-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4">
            <Link to={`add`} className="button is-success is-medium">
              Add New
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteList;
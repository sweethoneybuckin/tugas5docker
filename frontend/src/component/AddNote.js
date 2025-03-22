import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils";

const AddNote = () => {
  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");
  const navigate = useNavigate();

  const saveNote = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BASE_URL}/notes`, {
        judul,
        isi,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5 has-text-centered">
      <h1 className="title is-2"> Add Notes</h1>
      <div className="columns is-centered">
        <div className="column is-one-third">
          <div className="box p-5">
            <form onSubmit={saveNote}>
              <div className="field">
                <label className="label">Judul</label>
                <div className="control">
                  <input
                    type="text"
                    className="input has-text-centered has-background-light has-border-dark has-text-black"
                    value={judul}
                    onChange={(e) => setJudul(e.target.value)}
                    placeholder="Judul"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Isi</label>
                <div className="control">
                  <input
                    type="text"
                    className="input has-text-centered has-background-light has-border-dark has-text-black"
                    value={isi}
                    onChange={(e) => setIsi(e.target.value)}
                    placeholder="Isi"
                  />
                </div>
              </div>
              <div className="field">
                <button type="submit" className="button is-success is-fullwidth">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNote;

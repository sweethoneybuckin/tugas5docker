import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../utils";

const EditNote = () => {
  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getNotes();
  }, []);

  const updateNote = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`${BASE_URL}/notes/${id}`, {
        judul,
        isi,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getNotes = async () => {
    const response = await axios.get(`${BASE_URL}/notes/${id}`);
    setJudul(response.data.judul);
    setIsi(response.data.isi);
  };

  return (
    <div className="columns is-centered mt-5">
      <div className="column is-half">
        <div className="box has-background-light p-5">
          <h1 className="title has-text-centered has-text-primary">Edit Catatan</h1>
          <form onSubmit={updateNote}>
            <div className="field">
              <label className="label">Judul</label>
              <div className="control has-icons-left">
                <input
                  type="text"
                  className="input is-primary"
                  value={judul}
                  onChange={(e) => setJudul(e.target.value)}
                  placeholder="Masukkan Judul"
                  required
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-heading"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">Isi</label>
              <div className="control has-icons-left">
                <textarea
                  className="textarea is-primary"
                  value={isi}
                  onChange={(e) => setIsi(e.target.value)}
                  placeholder="Masukkan Isi Catatan"
                  required
                ></textarea>
                <span className="icon is-small is-left">
                  <i className="fas fa-pencil-alt"></i>
                </span>
              </div>
            </div>
            <div className="field is-grouped is-flex is-justify-content-center">
              <button type="submit" className="button is-success is-rounded is-medium">
                <i className="fas fa-save"></i> &nbsp; Simpan Perubahan
              </button>
              <button type="button" onClick={() => navigate("/")} className="button is-danger is-rounded is-medium ml-3">
                <i className="fas fa-times"></i> &nbsp; Batal
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditNote;
import Note from "../models/NoteModel.js";

// GET
  async function getNotes(req, res) {
    try {
      const response = await Note.findAll();
      res.status(200).json(response);
    } catch (error) {
      console.log(error.message);
    }
  }

  export const getNotesById = async (req, res) => {
    try {
        const note = await Note.findOne({ where: { id: req.params.id } });
        if (!note) {
            return res.status(404).json({ msg: "Note not found" });
        }
        res.status(200).json(note);
    } catch (error) {
        console.log(error.message);
    }
  };

  
  // CREATE
  async function createNotes(req, res) {
    try {
      const inputResult = req.body;
      await Note.create(inputResult);
      res.status(201).json({ msg: "Notes Created" });
    } catch (error) {
      console.log(error.message);
    }
  }
  
  export { getNotes, createNotes };
  
  export const updateNotes = async (req, res) => {
    try {
      await Note.update(req.body, { where: { id: req.params.id } });
      res.status(200).json({ msg: "Notes Updated" });
    } catch (error) {
      console.log(error.message);
    }
  }
  
  export const deleteNotes = async (req, res) => {
    try {
      await Note.destroy({ where: { id: req.params.id } });
      res.status(200).json({ msg: "Notes Deleted" });
    } catch (error) {
      console.log(error.message);
    }
  }
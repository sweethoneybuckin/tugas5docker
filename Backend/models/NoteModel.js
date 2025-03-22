import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const Notes = db.define(
  "notes", //NAMA TABELNYA DI DB APA
  {
    judul: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    isi: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true, 
    createdAt: "createdAt", 
    updatedAt: "updatedAt",
  }
);

db.sync().then(() => console.log("Database synced cihuy"));

export default Notes;

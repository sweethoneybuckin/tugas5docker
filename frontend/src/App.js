import {BrowserRouter, Routes, Route} from "react-router-dom";
import NoteList from "./component/NoteList.js";
import AddNote from "./component/AddNote.js";
import EditNote from "./component/EditNote.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NoteList/>}/>
        <Route path="add" element={<AddNote/>}/>
        <Route path="edit/:id" element={<EditNote/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
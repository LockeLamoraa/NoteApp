import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note";
import '../styles/home.css';
import { useNavigate } from "react-router-dom";

export default function Home() {
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        getNotes();
    }, []);

    function getNotes() {
        api.get("/api/notes/")
        .then((res) => res.data)
        .then((data) => { setNotes(data); console.log(data); })
        .catch((err) => console.log(err));
    }

    function deleteNote(id) {
        api.delete(`/api/notes/delete/${id}`)
        .then((res) => {
            if (res.status === 204) console.log("Note deleted!");
            else console.log("Failed to delete note.");
            getNotes();
        })
        .catch((err) => console.log(err));
    }

    function createNote(e) {
        e.preventDefault();
        api.post("/api/notes/", {content, title})
        .then((res) => {
            if (res.status === 201) console.log("Note createad!");
            else console.log("Failed to make note.");
            getNotes();
        })
        .catch(err => console.log(err));
    }

    function logout() {
        localStorage.clear();
        navigate("/login");
    }

    return (
        <div>
            <nav>
                <a onClick={logout} className="logout-link">Logout</a>
            </nav>
            <div>
                <h2>Create Note</h2>
                <form onSubmit={createNote}>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        value={title}
                        id="title"
                        name="title"
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <label htmlFor="content">Content:</label>
                    <textarea
                        value={content}
                        id="content"
                        name="content"
                        onChange={(e) => setContent(e.target.value)}
                        required
                        rows="5"
                    ></textarea>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
            <div>
                <h2>Notes</h2>
                {notes.map((note) => (
                    <Note
                        key={note.id}
                        note={note}
                        onDelete={deleteNote}
                    />
                ))}
            </div>
        </div>
    );
}
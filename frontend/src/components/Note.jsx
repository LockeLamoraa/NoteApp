import React from "react";
import '../styles/note.css';

export default function Note({ note, onDelete }) {
    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");
    return (
        <div className="note-container">
            <div className="note-header">
                <p className="note-title">{note.title}</p>
                <p className="note-date">{formattedDate}</p>
            </div>
            <p className="note-content">{note.content}</p>
            <div className="note-footer">
                <button
                    className="delete-button"
                    onClick={() => onDelete(note.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}
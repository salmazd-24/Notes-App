import { useState } from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

const Note = ({ id, text, date, handleDeleteNote, handleEditNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    handleEditNote(id, editedText);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedText(text);
  };

  return (
    <div className={`note ${isEditing ? 'editing' : ''}`}>
      {isEditing ? (
        <textarea
          rows='8'
          cols='10'
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        ></textarea>
      ) : (
        <span>{text}</span>
      )}

      <div className='note-footer'>
        <small>{date}</small>
        {isEditing ? (
          <div>
            <button className='save' onClick={handleSaveClick}>
              Save
            </button>
            <button className='cancel' onClick={handleCancelClick}>
              Cancel
            </button>
          </div>
        ) : (
          <div>
            <MdEdit onClick={handleEditClick} className='edit-icon' size='1.3em' />
            <MdDeleteForever
              onClick={() => handleDeleteNote(id)}
              className='delete-icon'
              size='1.3em'
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Note;

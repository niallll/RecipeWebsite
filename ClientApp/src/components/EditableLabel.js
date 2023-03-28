import React, { useState } from 'react';

function EditableLabel(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [label, setLabel] = useState(props.label);

  function handleEditClick() {
    setIsEditing(true);
  }

  function handleSaveClick() {
    setIsEditing(false);
    props.onLabelChange(label);
  }

  function handleCancelClick() {
    setIsEditing(false);
    setLabel(props.label);
  }

  function handleLabelChange(e) {
    setLabel(e.target.value);
  }

  return (
    <div>
      {isEditing ? (
        <div>
          <input type="text" value={label} onChange={handleLabelChange} />
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </div>
      ) : (
        <div>
          <span>{label}</span>
          <button onClick={handleEditClick}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default EditableLabel;
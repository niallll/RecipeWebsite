import React, { useState } from 'react';

function EditableLabel(props) {
  const [isEditing, setIsEditing] = useState(props.isEditing);
  const [label, setLabel] = useState(props.label);

  function handleLabelChange(e) {
    setLabel(e.target.value);
  }

  return (
    <div>
      {props.isEditing ? (
        <div>
          <input type="text" value={label} onChange={handleLabelChange} />
        </div>
      ) : (
        <div>
          <span>{label}</span>
        </div>
      )}
    </div>
  );
}

export default EditableLabel;
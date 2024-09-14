import  { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ItemTypes = {
  NOTE: 'note',
};

// Single Note component (draggable)
const Note = ({ note, index, moveNote }) => {
  const [{ isDragging }, ref] = useDrag({
    type: ItemTypes.NOTE,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ItemTypes.NOTE,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveNote(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => ref(drop(node))}
      className={`p-4 mb-4 bg-white shadow-md rounded-lg cursor-move transition-transform ${
        isDragging ? ' transform scale-105' : ''
      }`}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <p className="text-lg">{note}</p>
    </div>
  );
};

// Main Drag and Drop Notes Component
const DragDrop = () => {
  const [notes, setNotes] = useState([
    'Learn ReactJS',
    'Understand Drag & Drop',
    'Prepare for Interview',
    'Study Tailwind CSS',
    'Practice Coding',
  ]);

  const moveNote = (fromIndex, toIndex) => {
    const updatedNotes = [...notes];
    const [movedNote] = updatedNotes.splice(fromIndex, 1);
    updatedNotes.splice(toIndex, 0, movedNote);
    setNotes(updatedNotes);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <h1 className="text-2xl font-bold mb-6">React JS Drag & Drop Notes</h1>

        <div className="w-full max-w-md">
          {notes.map((note, index) => (
            <Note key={index} index={index} note={note} moveNote={moveNote} />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default DragDrop;

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

// 1. Define the drag item type (NOTE) using the ItemTypes object.

// 2. Create the Note component:
//    - Initialize drag functionality with `useDrag`:
//      - Attach the drag behavior to the note.
//      - Collect the `isDragging` state to apply style changes when dragging.
//    - Initialize drop functionality with `useDrop`:
//      - Accept only items of type "NOTE".
//      - When another note is dragged over, check if the dragged note's index differs from the current note's index.
//      - If so, invoke `moveNote` to swap positions of the notes.
//    - Return a styled div representing the note, with drag and drop references.

// 3. Create the DragDrop component:
//    - Initialize the `notes` state with an array of notes.
//    - Define the `moveNote` function:
//      - Remove the dragged note from its current position.
//      - Insert it at the new target position.
//      - Update the state to reflect the new order.
//    - Use `DndProvider` with the `HTML5Backend` to enable drag-and-drop functionality.
//    - Render a list of Note components, passing down the `note`, `index`, and `moveNote` props.

// 4. Render the main component:
//    - Each note is displayed as a draggable and droppable element.
//    - On drag-and-drop, the notes are reordered based on user interactions.

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

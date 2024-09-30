import  { useState } from "react";




// FUNCTION ModalComponent():
//     INITIALIZE isOpen as false (modal is closed)

//     FUNCTION toggleModal():
//         IF isOpen is true:
//             SET isOpen to false
//         ELSE:
//             SET isOpen to true

//     RETURN JSX structure:
//         DISPLAY button with text "Open Modal" IF isOpen is false
//         DISPLAY button with text "Close Modal" IF isOpen is true
//         ADD onClick event to the button to call toggleModal

//         IF isOpen is true:
//             DISPLAY modal:
//                 - Render overlay covering the screen
//                 - Render modal content with:
//                     - Title
//                     - Text
//                     - Close button that triggers toggleModal
//         ELSE:
//             Do not display modal

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <button
        onClick={toggleModal}
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500"
      >
        {isOpen ? "Close Modal" : "Open Modal"}
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          {/* Modal Content */}
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-4">Modal Title</h2>
            <p className="mb-4">
              This is the content of the modal. You can add any content here.
            </p>
            <button
              onClick={toggleModal}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;

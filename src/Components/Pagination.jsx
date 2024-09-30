import { useState } from "react";

const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const totalPages = Math.ceil(totalItems / itemsPerPage); // Calculate total pages

  const handleClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      onPageChange(page); // Call the function to update the displayed data
    }
  };
  // Start by setting the initial current page to 1.

  // Calculate total number of pages based on totalItems and itemsPerPage.
  
  // Render a "Previous" button:
  //     If the current page is greater than 1:
  //         Enable the button and go to the previous page on click.
  //     Else, disable the button.
  
  // For each page number (from 1 to totalPages):
  //     Render a button for each page.
  //     If the button corresponds to the current page:
  //         Highlight the button to show it’s selected.
  //     On clicking a button, update the current page to the clicked page number.
  
  // Render a "Next" button:
  //     If the current page is less than totalPages:
  //         Enable the button and go to the next page on click.
  //     Else, disable the button.
  

  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      {/* Previous Button */}
      <button
        className={`px-3 py-1 rounded-lg ${
          currentPage === 1
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {/* Render page numbers */}
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={`px-3 py-1 rounded-lg ${
            currentPage === index + 1
              ? "bg-blue-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
          onClick={() => handleClick(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      {/* Next Button */}
      <button
        className={`px-3 py-1 rounded-lg ${
          currentPage === totalPages
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

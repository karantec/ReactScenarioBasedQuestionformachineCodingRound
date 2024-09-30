import { useState } from 'react';

const DropDown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };


  // Component DropDown:
  //   Initialize state variable `selectedOption` as empty string ""

  //   Function handleSelectChange(event):
  //       Set `selectedOption` to event.target.value

  //   Render:
  //       Create a container `div`
        
  //       Inside the container:
  //           Create `label` with text "Select an option:"

  //           Create `select` element:
  //               For each option in ["Option 1", "Option 2", "Option 3"]:
  //                   Create an `option` element with the option's value and label
                
  //               Bind `onChange` event to handleSelectChange
  //               Set `value` of `select` to `selectedOption`

  //           If `selectedOption` is not "":
  //               Display a message "You selected: {selectedOption}"

  //   Return the JSX structure of the component

  return (
    <div className="flex flex-col items-center space-y-4">
      <label
        htmlFor="dropdown"
        className="text-lg font-medium text-gray-700"
      >
        Select an option:
      </label>
      <select
        id="dropdown"
        className="w-64 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="">--Please choose an option--</option>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select>

      {selectedOption && (
        <div className="mt-4 text-center">
          <p className="text-lg font-semibold text-gray-800">
            You selected: <span className="text-blue-600">{selectedOption}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default DropDown;

import React, { useState } from 'react';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  remove(value) {
    if (!this.head) return;

    if (this.head.value === value) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      while (current.next && current.next.value !== value) {
        current = current.next;
      }
      if (current.next) {
        current.next = current.next.next;
      }
    }
    this.size--;
  }

  toArray() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
}


// 1. Create a Node class to represent individual stations:
//    - Node contains 'value' for station name and 'next' pointer to the next node.

// 2. Create a LinkedList class to represent the train route:
//    - Initialize head to null and size to 0.
//    - Add station:
//      - Create a new node with the station name.
//      - If the list is empty (no head), set head to the new node.
//      - Else, traverse to the end and attach the new node.
//      - Increment the size of the linked list.
//    - Remove station:
//      - If the list is empty, return.
//      - If the head node is the one to be removed, set head to the next node.
//      - Else, traverse the list to find the station and remove it.
//      - Decrement the size of the linked list.
//    - Convert linked list to array:
//      - Traverse the list from head to the end, collecting station names in an array.

// 3. Create a React component called LinkedList1:
//    - Initialize state:
//      - `linkedList` stores a new LinkedList object.
//      - `station` stores the input value of the station name.
//      - `route` stores the current stations in an array (derived from linked list).
   
// 4. Define the addStation function:
//    - If the input field is not empty:
//      - Add the station to the linked list.
//      - Update the route state by converting the linked list to an array.
//      - Clear the input field.
   
// 5. Define the removeStation function:
//    - Remove the selected station from the linked list.
//    - Update the route state by converting the linked list to an array.
   
// 6. Render:
//    - Display an input field for typing a station name and a button to add a station.
//    - Display the list of stations:
//      - For each station, display the station name and a "Remove" button.
//    - If no stations are in the list, display a message.

// 7. Handle Add and Remove button actions:
//    - On "Add Station", add the station to the route.
//    - On "Remove", delete the station from the route.

const LinkedList1 = () => {
  const [linkedList] = useState(new LinkedList());
  const [station, setStation] = useState("");
  const [route, setRoute] = useState([]);

  const addStation = () => {
    if (station.trim()) {
      linkedList.add(station);
      setRoute(linkedList.toArray());
      setStation(""); // Clear input after adding
    }
  };

  const removeStation = (stationToRemove) => {
    linkedList.remove(stationToRemove);
    setRoute(linkedList.toArray());
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-6">Train Route (Linked List)</h1>

      <div className="flex space-x-3 mb-4">
        <input
          type="text"
          value={station}
          onChange={(e) => setStation(e.target.value)}
          placeholder="Add a station"
          className="border p-2 rounded-lg w-64"
        />
        <button
          onClick={addStation}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Add Station
        </button>
      </div>

      <div className="w-full max-w-2xl p-4 bg-white shadow-md rounded-lg">
        {route.length > 0 ? (
          <ul className="space-y-4">
            {route.map((stationName, index) => (
              <li key={index} className="flex justify-between items-center">
                <span className="text-lg">{stationName}</span>
                <button
                  onClick={() => removeStation(stationName)}
                  className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No stations in the route yet.</p>
        )}
      </div>
    </div>
  );
};

export default LinkedList1;

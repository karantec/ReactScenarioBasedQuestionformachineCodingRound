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

const LinkedList = () => {
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

export default LinkedList;

import React, { useState } from "react";

let nextId = 5;
function Devices() {
  const [deviceNameInputValue, setDeviceNameInputValue] = useState("");
  const [devices, setDevices] = useState([
    { id: 1, name: "iPone" },
    { id: 2, name: "MacBook" },
    { id: 3, name: "iPad" },
    { id: 4, name: "Apple Watch" },
  ]);

  const deviceList = devices.map((device) => {
    return (
      <li key={device.id}>
        {device.name}{" "}
        <button
          onClick={() => {
            handleDeleteClick(device.id);
          }}
        >
          Delete
        </button>
        <button
          onClick={() => {
            handleEditClick(device.id);
          }}
        >
          Edit
        </button>
      </li>
    );
  });

  function handleEditClick(id) {
    const newDevices = devices.map((device) => {
      if (device.id == id) {
        let newDevice = { ...device, name: device.name + "0" };
        return newDevice;
      } else {
        return device;
      }
    });
    setDevices(newDevices);
  }
  function handleDeleteClick(id) {
    // const newDevices = devices.filter((device) => {
    //   if (device.id === id) return false;

    //   return true;
    // });

    // setDevices(newDevices);

    const newDevices = [...devices];

    let index = 0;
    let selectedIndex = 0;

    for (let device of newDevices) {
      if (device.id == id) {
        selectedIndex = index;
      }
      index++;
    }
    newDevices.splice(selectedIndex, 1);
    setDevices(newDevices);
  }

  function handleAddClick() {
    // const newDevices = [...devices];
    // newDevices.push(deviceNameInputValue);
    // setDevices(newDevices);

    setDevices([...devices, { id: nextId, name: deviceNameInputValue }]);
    nextId++;
  }

  return (
    <div>
      <ul>{deviceList}</ul>
      <input
        value={deviceNameInputValue}
        onChange={(event) => {
          setDeviceNameInputValue(event.target.value);
        }}
      />
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
}

export default Devices;

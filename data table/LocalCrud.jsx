import React, { useEffect, useState } from "react";

export default function LocalCrud() {
  const [items, setItems] = useState(() => {
    const storedData = localStorage.getItem("Data");
    return storedData ? JSON.parse(storedData) : [];
  });

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [edit, setEdit] = useState(null);

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleAddData = (e) => {
    e.preventDefault();
    if (name === "") {
      alert("Please enter a name");
    } else if (name.length < 2) {
      alert("Please enter more than 2 characters for name");
    } else if (password === "") {
      alert("Please enter a password");
    } else if (password.length < 8) {
      alert("Please enter more than 8 characters for password");
    } else {
      setItems([...items, { name, password }]);
      setName("");
      setPassword("");
    }
    setEdit(null);
  };

  useEffect(() => {
    localStorage.setItem("Data", JSON.stringify(items));
  }, [items]);

  const handleDelete = (index) => {
    const updatedData = items.filter((item, i) => i !== index);
    setItems(updatedData);
  };

  const handleEdit = (index) => {
    setEdit(index);
    setName(items[index].name);
    setPassword(items[index].password);
  };

  const handleSaveData = () => {
    const updatedData = [...items];
    updatedData[edit] = { name, password };
    setItems(updatedData);
    setName("");
    setPassword("");
    setEdit(null);
  };

  return (
    <>
      <form onSubmit={handleAddData}>
        <input
          type="text"
          placeholder="Enter a Name"
          name="name"
          value={name}
          onChange={handleInput}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter a Password"
          name="password"
          value={password}
          onChange={handleInput}
        />
        <br />
        <br />
        {edit === null ? (
          <button type="submit">Add Data</button>
        ) : (
          <button type="button" onClick={handleSaveData}>
            Update
          </button>
        )}
      </form>
      {items.length > 0 && (
        <table cellPadding={5} border={2}>
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Name</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.password}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

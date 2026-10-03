import { useState } from "react";
import Hero from "../Components/Hero";
import user from "../User";

const About = () => {
  const [userList, setUserList] = useState(user);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId !== null) {
      setUserList(
        userList.map((item) =>
          item.id === editId ? { ...item, name, email } : item
        )
      );
      setEditId(null);
    } else {
      const newUser = {
        id: userList.length
          ? Math.max(...userList.map((item) => item.id)) + 1
          : 1,
        name,
        email,
      };

      setUserList([...userList, newUser]);
    }

    setName("");
    setEmail("");
  };
  

  const handleEditBtn = (item) => {
    setEditId(item.id);
    setName(item.name);
    setEmail(item.email);
  };

  const handleDeleteUser = (id) => {
    setUserList(userList.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Hero title="About page" />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Enter a name"
          onChange={(event) => setName(event.target.value)}
        />

        <input
          type="email"
          value={email}
          placeholder="Enter an email"
          onChange={(event) => setEmail(event.target.value)}
        />

        <button type="submit">
          {editId !== null ? "Save" : "Add"}
        </button>
      </form>

      {userList.map((item) => (
        <div key={item.id}>
          <h2>{item.id}</h2>
          <h3>{item.name}</h3>
          <h4>{item.email}</h4>

          <button onClick={() => handleDeleteUser(item.id)}>Delete</button>
          <button onClick={() => handleEditBtn(item)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default About;
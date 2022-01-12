import React from "react";
import "./App.css";
import Input from "./components/input";
import { useState } from "react";
import Card from "./components/card";

function App() {
  interface User {
    name: string;
    age: number;
    hobby: string;
  }

  const [users, setUsers] = useState<User[]>([] as User[]);
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [hobby, setHobby] = useState<string>("");

  const handleSubmit = (name: string, age: number, hobby: string) => {
    const user = { name, age, hobby };

    setUsers([...users, user]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Input
          label="name"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label="age"
          placeholder="age"
          onChange={(e) => setAge(Number(e.target.value))}
        />
        <Input
          label="hobby"
          placeholder="hobby"
          onChange={(e) => setHobby(e.target.value)}
        />
        <button onClick={() => handleSubmit(name, age, hobby)}>send</button>

        {users.map((user, index) => (
          <div key={index}>
            <Card name={user.name} age={user.age} hobby={user.hobby} />
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;

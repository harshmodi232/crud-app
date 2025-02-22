import { useState } from "react";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";

export default function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const editUser = (user) => {
    setUsers(users.map((u) => (u.email === user.email ? user : u)));
    setEditingUser(null);
  };

  const deleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">CRUD App</h1>
      <UserForm addUser={addUser} editUser={editUser} editingUser={editingUser} />
      <UserTable users={users} editUser={setEditingUser} deleteUser={deleteUser} />
    </div>
  );
}

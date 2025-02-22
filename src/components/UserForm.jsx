import { useState } from "react";
import { motion } from "framer-motion";

export default function UserForm({ addUser, editUser, editingUser }) {
  const [formData, setFormData] = useState(editingUser || { name: "", address: "", email: "", role: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUser) {
      editUser(formData);
    } else {
      addUser(formData);
    }
    setFormData({ name: "", address: "", email: "", role: "" });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 shadow-md rounded-lg space-y-4"
    >
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" />
      <input name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="w-full p-2 border rounded" />
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" />
      <input name="role" placeholder="Role" value={formData.role} onChange={handleChange} className="w-full p-2 border rounded" />
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
        {editingUser ? "Update" : "Add"} User
      </button>
    </motion.form>
  );
}

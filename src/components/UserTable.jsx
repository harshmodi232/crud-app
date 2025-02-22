import { motion } from "framer-motion";

export default function UserTable({ users, editUser, deleteUser }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Address</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <motion.tr key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.address}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.role}</td>
              <td className="border p-2">
                <button onClick={() => editUser(user)} className="bg-yellow-500 text-white p-1 rounded mr-2">Edit</button>
                <button onClick={() => deleteUser(index)} className="bg-red-500 text-white p-1 rounded">Delete</button>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}

import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const params = useParams();
  console.log(params);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(title, description);

    // const res = await fetch("http://127.0.0.1:8000/api/tasks", {
    //   method: "POST",
    //   body: JSON.stringify({ title, description }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    //Esto es igual a lo de arriba
    const res = await axios.post("http://127.0.0.1:8000/api/tasks", {
      title,
      description,
    });

    console.log(res);
    e.target.reset();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-6 rounded-lg shadow-lg w-96"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          Nueva Tarea
        </h2>

        <input
          type="text"
          placeholder="Título"
          className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Descripción"
          rows="3"
          className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
          {params.id ? "Actualizar" : "Crear"}
        </button>
      </form>
    </div>
  );
}

export default TaskForm;

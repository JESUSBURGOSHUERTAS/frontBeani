import { useEffect, useState } from "react";
import axios from "axios";
import TaskList from "../components/TaskList";

function Homepages() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    async function fetchTasks() {
      const res = await axios.get("http://localhost:8000/api/tasks");
      console.log(res);
      setTasks(res.data);
    }
    fetchTasks();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold">Homepages</h1>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default Homepages;

function TaskList({ tasks }) {
    return (
      <div className="max-w-3xl mx-auto mt-6">
        {tasks.length === 0 ? (
          <p className="text-center text-gray-500">No hay tareas disponibles</p>
        ) : (
          <div className="grid gap-4">
            {tasks.map((task) => (
              <div
                key={task._id}
                className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500"
              >
                <h2 className="text-xl font-semibold text-gray-800">
                  {task.title}
                </h2>
                <p className="text-gray-600 mt-1">{task.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
  
  export default TaskList;
  
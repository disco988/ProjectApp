import NewTask from './NewTask'

const Tasks = ({ onAdd, onDelete, tasks }) => {
  return (
    <section className="px-16">
      <h2 className="text-2xl font-bold text-stone-950 my-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && <p className="mb-4 text-stone-800 pt-8">This project does not have any tasks yet</p>}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-cyan-600">
          {tasks.map(task => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button onClick={() => onDelete(task.id)} className="text-stone-700 hover:text-red-500">
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default Tasks

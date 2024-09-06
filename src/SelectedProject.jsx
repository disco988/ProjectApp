import Tasks from './Tasks'

const selectedProject = ({ project, onDelete, onAddTask, onDeleteTask, tasks }) => {
  const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <div className="w-full mt-16 bg-emerald-500">
      <header className="pb-4 pl-16 mb-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-950 mb-2">{project.title}</h1>
          <button onClick={onDelete} className=" pr-16 text-stone-950 hover:text-stone-950">
            delete
          </button>
        </div>
        <p className="mb-4 text-stone-950">{formattedDate}</p>
        <p className="text-stone-950 whitespace-pre-wrap">{project.desc}</p>
      </header>
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
  )
}

export default selectedProject

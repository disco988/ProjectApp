import Button from './Button'

function SideBar({ addProject, projects, onSelectProject, selectedProject }) {
  return (
    <div className="w-1/3 bg-cyan-600 h-full md:w-[20rem] mt-16 rounded-md ">
      <h1 className="font-bold text-stone-50 mb-8 mt-6 ml-3">My Projects</h1>
      <p className="text-right mb-4">
        <Button onClick={addProject}>+ Add Project</Button>
      </p>
      <ul>
        {projects.map(project => {
          let cssClass =
            'w-full text-left text-xl px-2 py-1 font-bold rounded-sm my-1 hover:text-stone-50 hover:bg-cyan-700'

          if (project.id === selectedProject) {
            cssClass += ' bg-cyan-700 text-stonme-200'
          } else {
            cssClass += ' text-stone-950'
          }

          return (
            <li key={project.id}>
              <button onClick={() => onSelectProject(project.id)} className={cssClass}>
                {project.title}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SideBar

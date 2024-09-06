import SideBar from './SideBar'
import NoProject from './NoProject'
import AddProject from './AddProject'
import SelectedProject from './SelectedProject'
import { useState } from 'react'

function App() {
  const [projectState, setProjectState] = useState({
    projects: [],
    selectedProject: null,
    tasks: [],
  })

  const handleAddTask = text => {
    setProjectState(prevState => {
      const taskId = Math.random()
      const newTask = {
        text: text,
        id: taskId,
        projectId: prevState.selectedProject,
      }
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      }
    })
  }

  const handleDeleteTask = id => {
    setProjectState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(task => task.id !== id),
      }
    })
  }

  const handleDeleteProject = () => {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProject: null,
        projects: prevState.projects.filter(project => project.id !== prevState.selectedProject),
      }
    })
  }

  const handleSelectProject = id => {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProject: id,
      }
    })
  }

  const handleAddProject = () => {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProject: undefined,
      }
    })
  }

  const handleCancelProject = () => {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProject: null,
      }
    })
  }

  const handleCreateProject = project => {
    setProjectState(prevState => {
      const projectId = Math.random()
      const newProject = {
        ...project,
        id: projectId,
      }
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        selectedProject: null,
      }
    })
  }

  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProject)

  const selectedProjectTasks = projectState.tasks.filter(task => task.projectId === projectState.selectedProject)

  let content = (
    <SelectedProject
      onDelete={handleDeleteProject}
      project={selectedProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={selectedProjectTasks}
    />
  )

  if (projectState.selectedProject === null) {
    content = <NoProject addProject={handleAddProject} />
  } else if (projectState.selectedProject === undefined) {
    content = <AddProject onAddProject={handleCreateProject} cancelProject={handleCancelProject} />
  }

  return (
    <div className="flex h-screen bg-emerald-500 overflow-hidden">
      <SideBar
        onSelectProject={handleSelectProject}
        projects={projectState.projects}
        addProject={handleAddProject}
        selectedProject={projectState.selectedProject}
      />
      {content}
    </div>
  )
}

export default App

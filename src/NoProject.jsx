import Button from './Button'

const NoProject = ({ addProject }) => {
  return (
    <div className="bg-emerald-500 w-full text-stone-50 font-bold text-center py-16 ">
      <h1 className="py-2"> No Project Selected</h1>
      <p className="py-2">Select the project or create a new one</p>
      <p className="py-4">
        <Button onClick={addProject}>Create a project</Button>
      </p>
    </div>
  )
}

export default NoProject

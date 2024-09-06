import { useState } from 'react'

const NewTask = ({ onAdd }) => {
  const [enteredTask, setEnteredTask] = useState('')

  const handleClick = () => {
    if (enteredTask.trim() === '') {
      return
    } else {
      onAdd(enteredTask)
      setEnteredTask('')
    }
  }

  const handleChange = e => {
    setEnteredTask(e.target.value)
  }

  return (
    <div className="flex items-center gap-4">
      <input
        onChange={handleChange}
        value={enteredTask}
        type="text"
        className="w-64 px-2 py-1  outline-none rounded-md bg-stone-200 focus:border-4 focus:border-cyan-600"
      />
      <button onClick={handleClick} className="text-stone-700 hover:text-stone-950">
        Add Task
      </button>
    </div>
  )
}

export default NewTask

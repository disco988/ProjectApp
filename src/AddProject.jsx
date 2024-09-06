import Input from './Input'
import Button from './Button'
import { useRef } from 'react'
import Modal from './Modal'

const AddProject = ({ cancelProject, onAddProject }) => {
  const modal = useRef()
  const title = useRef()
  const desc = useRef()
  const dueDate = useRef()

  const onCreateProject = () => {
    const titleValue = title.current.value
    const descValue = desc.current.value
    const dueDateValue = dueDate.current.value

    if (titleValue.trim() === '' || descValue.trim() === '' || dueDateValue.trim() === '') {
      modal.current.open()
      return
    }

    onAddProject({
      title: titleValue,
      desc: descValue,
      dueDate: dueDateValue,
    })
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <p>All fields are mandatory</p>
      </Modal>
      <div className="bg-emerald-500 w-full text-center font-bold text-stone-50 uppercase py-16">
        <Input ref={title} label="Title" type="text" />
        <Input ref={desc} label="Description" textarea />
        <Input ref={dueDate} label="Due Date" type="date" />
        <div className="flex justify-between w-[15rem] mx-auto ">
          <Button onClick={cancelProject}>Cancel</Button>
          <Button onClick={onCreateProject}>Save</Button>
        </div>
      </div>
    </>
  )
}

export default AddProject

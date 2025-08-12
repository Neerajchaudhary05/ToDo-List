import React from 'react'
import { TiTick } from "react-icons/ti";
import { MdDeleteForever } from "react-icons/md";
import { MdOutlineBrightness1 } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";


const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className='flex items-center my-3 gap-2'>
      <div onClick={() => { toggle(id) }} className='flex flex-1 items-center cursor-pointer'>
        {
          isComplete ? <FaCheckCircle className='text-orange-400 text-xl w-7' /> : <MdOutlineBrightness1 className='text-orange-400 text-2xl w-7' />
        }
        <p className={`text-slate-700 mi-4 text-[17px] decoration-slate-500 
          ${isComplete ? "line-through":""}`}>{text}</p>
      </div>
      <MdDeleteForever onClick={() => { deleteTodo(id) }} className=' text-2xl text-slate-800 cursor-pointer' />

    </div>
  )
}

export default TodoItems
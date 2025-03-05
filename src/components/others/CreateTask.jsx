// import React, {useState} from 'react'

// const CreateTask = () => {

//     const [taskTitle, setTaskTitle] = useState('')
//     const [taskDescription, setTaskDescription] = useState('')
//     const [taskDate, setTaskDate] = useState('')
//     const [assignTo, setAssignTo] = useState('')
//     const [category, setCategory] = useState('')

//     const [task, setTask] = useState({})

//     const submitHandler = (e) => {
//         e.preventDefault()
//         // console.log(taskTitle, taskDescription, taskDate, assignTo, category)
        
//         setTask({taskTitle, taskDescription, taskDate, category, assignTo, active:false, newTask:true, failed:true, completed:false})
//         console.log(task)
//     }

//     return (
//         <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
//                 <form onSubmit={(e)=>{
//                     submitHandler(e)
//                 }} 
//                 className='flex flex-wrap w-full items-start justify-between'>
//                     <div className='w-1/2'>
//                     <div>
//                         <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
//                         <input
//                         value={taskTitle}
//                         onChange={(e)=>{
//                             setTaskTitle(e.target.value)
//                         }}
//                         className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder='Make A UI Design' />
//                     </div>
//                     <div>
//                         <h3>Date</h3>
//                         <input
//                         value={taskDate}
//                         onChange={(e)=>{
//                             setTaskDate(e.target.value)
//                         }}
//                         className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="date"  />
//                     </div>
//                     <div>
//                         <h3>Assign To</h3>
//                         <input
//                         value={assignTo}
//                         onChange={(e)=>{
//                             setAssignTo(e.target.value)
//                         }}
//                         className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type='text' placeholder='employee name' />
//                     </div>
//                     <div>
//                         <h3>Category</h3>
//                         <input
//                         value={category}
//                         onChange={(e)=>{
//                             setCategory(e.target.value)
//                         }}
//                         className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type='text' placeholder='design, dev, etc' />
//                     </div>
//                     </div>
                    
//                     <div className='w-2/5 flex flex-col items-start'>
//                         <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
//                         <textarea value={taskDescription}
//                         onChange={(e)=>{
//                             setTaskDescription(e.target.value)
//                         }}
//                         className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id=""></textarea>
//                         <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
//                     </div>
//                 </form>
//             </div>
//     )
// }

// export default CreateTask



import React, { useState, useEffect, useContext } from "react";
import {AuthContext} from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const [assignTo, setAssignTo] = useState("");
    const [category, setCategory] = useState("");

    const [newTask, setNewTask] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();

        setNewTask({
        taskTitle,
        taskDescription,
        taskDate,
        category,
        active: false,
        newTask: true,
        failed: false,
        completed: false,
        });

        const data = userData
        // console.log(data)
        
        data.forEach(function (elem) {
            if(assignTo == elem.firstName){
                elem.tasks.push(newTask)
                elem.taskCounts.newTask = elem.taskCounts.newTask+1
            }
        })
        setUserData(data)
        console.log(data)

        setTaskTitle('')
        setCategory('')
        setAssignTo('')
        setTaskDate('')
        setTaskDescription('')
    };

    // Log the updated task whenever it changes
    // useEffect(() => {
    //     console.log(task);
    // }, [task]);

    return (
        <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
        <form
            onSubmit={(e) => {
            submitHandler(e);
            }}
            className="flex flex-wrap w-full items-start justify-between"
        >
            <div className="w-1/2">
            <div>
                <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
                <input
                value={taskTitle}
                onChange={(e) => {
                    setTaskTitle(e.target.value);
                }}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="Make A UI Design"
                />
            </div>
            <div>
                <h3>Date</h3>
                <input
                value={taskDate}
                onChange={(e) => {
                    setTaskDate(e.target.value);
                }}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="date"
                />
            </div>
            <div>
                <h3>Assign To</h3>
                <input
                value={assignTo}
                onChange={(e) => {
                    setAssignTo(e.target.value);
                }}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="employee name"
                />
            </div>
            <div>
                <h3>Category</h3>
                <input
                value={category}
                onChange={(e) => {
                    setCategory(e.target.value);
                }}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="design, dev, etc"
                />
            </div>
            </div>

            <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea
                value={taskDescription}
                onChange={(e) => {
                setTaskDescription(e.target.value);
                }}
                className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
            ></textarea>
            <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
                Create Task
            </button>
            </div>
        </form>
        </div>
    );
};

export default CreateTask;

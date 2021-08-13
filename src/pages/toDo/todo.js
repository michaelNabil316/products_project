import './todo.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';

export default function Todo() {
    const [task, setsingleTask] = useState("");
    const [Tasks, setTask] = useState([
        { name: "Course", linethrow: false },
        { name: "Gem", linethrow: false },
        { name: "sleep", linethrow: false },
    ]);

    const [taskErr, setTaskErr] = useState("");

    const handelChange = (e) => {
        if (e.target.name === "taskTXT") {
            setsingleTask(
                { name: e.target.value, linethrow: false }
            );
        }
    }
    const submitTask = () => {
        if (task.name.length > 0) {
            setTask([...Tasks, task]
            );
            setTaskErr("")
        }
        else {
            setTaskErr("no task entered")
        }
        console.log(Tasks);
    }

    //delete element
    const handleRemoveItem = index => {
        const newTask = [...Tasks];
        newTask.splice(index, 1);
        setTask(newTask);
    };

    //underline

    const handlelinethrow = index => {
        const newTask = [...Tasks];
        newTask[index].linethrow = !newTask[index].linethrow;
        setTask(newTask);
    };

    return <div className="mainDivStyle row">
        <div className=" card text-white bg-primary mb-5 mt-5 cardstyl" >
            <div className="card-header"><h3>toDo tasks</h3></div>
            <div className="card-body">
                <div className="form-group">
                    <div className="row">
                        <h5 htmlFor="exampleInputEmail1" className="col-2 form-label mt-1">Task</h5>
                        <input onChange={handelChange} name="taskTXT" type="email" className=" form-control inputStylr" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter task" />
                    </div>
                    <p className="errColor" >{taskErr}</p>
                    <button type="button" className="btn btn-light" onClick={submitTask}>Enter</button>
                </div>
            </div>
        </div>

        <div key="index" className="card bg-primary text-white cardstyl">
            <div className="card-body">
                <table className="table tableSty" >
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Task</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Tasks.map((el, index) =>
                            <tr key={index}>
                                <td style={{ textDecorationLine: el.linethrow ? "line-through" : "" }}>{index + 1}</td>
                                <td style={{ textDecorationLine: el.linethrow ? "line-through" : "" }}>{el.name}</td>
                                <td>
                                    <button type="button" className="btn btn-outline-danger" onClick={() => { handleRemoveItem(index) }}
                                    >Delete</button>
                                    <button type="button" className="btn btn-outline-warning btnstyle" onClick={() => { handlelinethrow(index) }}
                                    >Checked</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}

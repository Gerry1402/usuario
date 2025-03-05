import { BoxTasks } from "./styles.js";
import { useState, useEffect } from "react";
import {
    createTaskByUserId,
    getTasksByUserId,
} from "../../services/auth";
import { useUserContext } from "../../providers/UserProvider";
import Task from "./Task/Task.jsx";

const Tasks = () => {
    const { user } = useUserContext();
    const [tasks, setTasks] = useState([]);
    const updateTasks = () => getTasksByUserId(user.uid).then(setTasks);
    useEffect(() => {
        user&& getTasksByUserId(user.uid).then(setTasks);
    }, [user]);

    const [task, setTask] = useState({ text: "" });

    return (
        <BoxTasks>
            <table>
                <thead>
                    <tr>
                        <th>Tasks</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => (
                        <Task key={task.id} uid={user.uid} id={task.id} content={task.text} reload={updateTasks} />
                    ))}
                    <tr>
                        <td>
                            <input
                                type="text"
                                value={task.text}
                                onChange={(e) => setTask({ text: e.target.value })}
                            />
                        </td>
                        <td>
                            <button
                                onClick={() => {
                                    createTaskByUserId(user.uid, task).then(() => {
                                        updateTasks();
                                        setTask({ text: "" });
                                    });
                                }}
                            >
                                Add
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </BoxTasks>
    );
};

export default Tasks;

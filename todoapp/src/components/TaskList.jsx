    import React from "react";
    import TaskItems from './TaskItems'

    const TaskList = ({ tasks, onUpdate, onDelete, onModify }) => {
    return (
        <div>
        {tasks.map((task) => ( // Parcourt la liste des tâches et rend un composant TaskItem pour chaque tâche.
            <div  className="listask">
                <TaskItems key={task.id} task={task} onUpdate={onUpdate} onDelete={onDelete} onModify={onModify}/>
            </div>
            
        ))}
        </div>
    );
    };

    export default TaskList;

    import React, { useState } from "react"; 
    // Importe React et useState depuis la bibliothèque React, useState permet de gérer l'état d'un composant.

    const TaskItem = ({ task, onUpdate, onDelete }) => { 
    // Définit le composant fonctionnel TaskItem qui prend des propriétés: task, onUpdate et onDelete.

    const [isEditing, setIsEditing] = useState(false); 
    // Initialise une variable isEditing avec une valeur false, pour vérifier si on est en mode "édition".

    const [taskName, setTaskName] = useState(task.taskName); 
    // Initialise taskName avec le nom de la tâche passée en propriété, et une fonction setTaskName pour le modifier.

    const [taskContent, setTaskContent] = useState(task.taskContent); 
    // Initialise taskContent avec le contenu de la tâche passée en propriété, et une fonction setTaskContent pour le modifier.

    const handleComplete = () => { 
        // Définit une fonction handleComplete pour marquer une tâche comme complète ou incomplète.
        onUpdate({ ...task, completed: !task.completed }); 
        // Met à jour la tâche avec son état "completed" inversé (true <-> false).
    };

    const handleSave = () => { 
        // Définit une fonction handleSave pour enregistrer les modifications apportées à la tâche.
        onUpdate({ ...task, taskName, taskContent }); 
        // Appelle la fonction onUpdate pour envoyer les nouvelles données (taskName et taskContent).
        setIsEditing(false); 
        // Sort du mode édition en réinitialisant isEditing à false.
    };

    return ( 
        // Retourne l'interface visuelle du composant.
        <section className={`task-item ${task.completed ? "completed" : ""}`}> 
        {/* // Crée un div avec une classe CSS conditionnelle "completed" si la tâche est marquée comme terminée. */}
        {isEditing ? ( 
            // Si on est en mode édition...
            <div className="isedit"> 
                <input 
                    type="text" 
                    value={taskName} 
                    onChange={(e) => setTaskName(e.target.value)} 
                /> <br/>
                {/* // Affiche un champ de texte pour modifier le nom de la tâche, et met à jour taskName à chaque changement. */}

                <textarea 
                    value={taskContent} 
                    onChange={(e) => setTaskContent(e.target.value)} 
                /> <br/>
                {/* // Affiche une zone de texte pour modifier le contenu de la tâche, et met à jour taskContent à chaque changement. */}

                <button onClick={handleSave}>Save</button> 
                {/* // Bouton pour enregistrer les modifications en appelant handleSave. */}
            </div> 
        ) : ( 
            // Si on n'est pas en mode édition...
            <div> 
                <h3 style={{ textDecoration: task.completed ? "line-through" : "none" }}> {task.taskName}</h3> 
                {/* // Affiche le nom de la tâche dans un titre. */}

                <p>{task.taskContent}</p> 
                {/* // Affiche le contenu de la tâche dans un paragraphe. */}

                <button onClick={handleComplete}> 
                    {task.completed ? "Mark as Incomplete" : "Mark as Complete"} 
                </button> 
                {/* // Bouton pour marquer la tâche comme "Terminée" ou "Incomplète" selon son état actuel. */}

                <button onClick={() => setIsEditing(true)}>Modify</button> 
                {/* // Bouton pour entrer en mode édition en activant isEditing (isEditing = true). */}

                <button onClick={() => onDelete(task.id)}>Delete</button> 
                {/* // Bouton pour supprimer la tâche en appelant la fonction onDelete avec l'ID de la tâche. */}
            </div> 
        )} 
        </section> 
    ); 
    };

    export default TaskItem; 
    // Exporte le composant TaskItem pour qu'il puisse être utilisé dans d'autres parties de l'application.

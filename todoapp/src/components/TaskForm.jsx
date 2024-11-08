    import React, { useState } from "react";

    const TaskForm = ({ onAdd }) => {
    const [taskName, setTaskName] = useState(""); // État local pour le nom de la tâche.
    const [taskContent, setTaskContent] = useState(""); // État local pour le contenu de la tâche.

    const handleSubmit = (e) => { // Fonction de gestion de la soumission du formulaire.
        e.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire.
        if (taskName && taskContent) { // Vérifie que les champs taskName et taskContent ne sont pas vides.
        onAdd({ id: Date.now(), taskName, taskContent, completed: false }); // Appelle la fonction onAdd avec une nouvelle tâche.
        setTaskName(""); // Réinitialise le champ taskName.
        setTaskContent(""); // Réinitialise le champ taskContent.
        }
    };

    return (
        <div className="formula">
            <form onSubmit={handleSubmit}> 
                {/* // Formulaire de saisie des tâches. */}
                <input
                    type="text"
                    placeholder="Task Name"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    required
                /><br/>
                <textarea
                    placeholder="Task Content"
                    value={taskContent}
                    onChange={(e) => setTaskContent(e.target.value)}
                    required
                /><br/>
                <button type="submit">Add Task</button>
        </form>
        </div>
        
    );
    };

    export default TaskForm;

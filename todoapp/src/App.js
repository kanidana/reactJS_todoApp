import React, { useState, useEffect } from "react"; // Importation de React et des hooks useState et useEffect depuis la bibliothèque React.
import TaskForm from "./components/TaskForm"; // Importation du composant TaskForm depuis le dossier components.
import TaskList from "./components/TaskList"; // Importation du composant TaskList depuis le dossier components.
import "./App.css"

const App = () => { // Déclaration du composant fonctionnel App.

  const [tasks, setTasks] = useState(() => { // Initialisation de l'état 'tasks' avec useState pour gérer la liste des tâches.
    try { // Bloc try pour gérer d'éventuelles erreurs lors de la lecture des tâches depuis le localStorage.
      const savedTasks = localStorage.getItem("tasks"); // Récupération des tâches sauvegardées dans le localStorage.
      return savedTasks ? JSON.parse(savedTasks) : []; // Si des tâches existent, on les parse en JSON, sinon on retourne un tableau vide.
    } catch (error) { // Si une erreur survient (données corrompues ou non conformes), on la gère ici.
      console.error("Erreur de lecture des tâches depuis le localStorage:", error); // Affichage de l'erreur dans la console pour le débogage.
      return []; // Retour d'un tableau vide en cas d'erreur.
    }
  });

  useEffect(() => { // useEffect pour sauvegarder les tâches dans le localStorage chaque fois que 'tasks' est modifié.
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Sauvegarde des tâches dans le localStorage en les convertissant en chaîne JSON.
  }, [tasks]); // useEffect se déclenche à chaque changement de la valeur de 'tasks'.

  const addTask = (task) => { // Fonction addTask pour ajouter une nouvelle tâche à la liste.
    setTasks([...tasks, task]); // Mise à jour de 'tasks' en ajoutant la nouvelle tâche à la liste existante.
  };

  const updateTask = (updatedTask) => { // Fonction updateTask pour mettre à jour une tâche existante.
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task)); // Parcours des tâches et remplacement de celle qui a le même ID que la tâche mise à jour.
  };

  const deleteTask = (taskId) => { // Fonction deleteTask pour supprimer une tâche spécifique.
    setTasks(tasks.filter(task => task.id !== taskId)); // Mise à jour de 'tasks' en filtrant et en excluant la tâche dont l'ID correspond à 'taskId'.
  };

  const modifyTask = (task) => { // Fonction modifyTask pour potentiellement modifier une tâche (affiche dans la console pour l'instant).
    console.log("Modifier la tâche :", task); // Affichage de la tâche à modifier dans la console (la logique de modification peut être ajoutée ici).
  };

  return ( // Retourne le rendu de l'interface utilisateur du composant App.
    <div className="myApp">
      <h1>Bienvenue dans <span className="todo">TODO</span></h1> {/* Affichage du titre de l'application */}
      <TaskForm onAdd={addTask} /> {/* Rendu du composant TaskForm avec la fonction addTask passée en prop pour ajouter des tâches */}
      {tasks.length > 0 ? ( // Condition : si des tâches existent, on affiche la liste, sinon un message indiquant qu'il n'y en a pas.
        <TaskList tasks={tasks} onUpdate={updateTask} onDelete={deleteTask} onModify={modifyTask} /> // Rendu de TaskList avec les tâches et les fonctions d'ajout, de mise à jour et de suppression.
      ) : (
        <p>Aucune tâche pour l'instant</p> // Affichage d'un message si la liste des tâches est vide.
      )}
    </div>
  );
};

export default App; // Exportation du composant App pour être utilisé dans d'autres parties de l'application.

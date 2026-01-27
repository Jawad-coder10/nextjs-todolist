import CreateTodolistPage from '@/src/components/dashboard/create-todolist'
import React from 'react'

export default function CreatePage() {
  return (
    <>
        <CreateTodolistPage 
            pageTitle="Créer une nouvelle Todo List"
            title="Titre du todoList"
            titlePlaceholder="Ex: Courses, Projets, Vacances..."
            description="Description (optionnel)"
            descriptionPlaceholder="Décrivez votre todo list..."
            colorLabel="Couleur de la liste"
            cancelButtonText="Annuler"
            submitButtonText="Créer la liste"
            submitLoadingText="Création..."
            errorTitleRequired="Le titre est obligatoire"
            errorCreation="Erreur lors de la création"
        />
    </>
  )
}

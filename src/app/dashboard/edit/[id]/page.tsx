import React from 'react'
import EditTodolistPage from '@/src/components/dashboard/edit-todolist'

export default async function EditPage({ params }: { params: Promise<{ id: string }> }) {
    const { id: idParam } = await params
    const id = Number(idParam)
    if (Number.isNaN(id)) {
        return <div>Todo List introuvable</div>
    }
    return (
        <>
            <EditTodolistPage
                id={id}
                pageTitle="Modifier la Todo List"
                title="Titre du todoList"
                titlePlaceholder="Ex: Courses, Projets, Vacances..."
                description="Description (optionnel)"
                descriptionPlaceholder="Décrivez votre todo list..."
                cancelButtonText="Annuler"
                submitButtonText="Enregistrer les modifications"
                submitLoadingText="Enregistrement..."
                errorTitleRequired="Le titre est obligatoire"
                errorLoadText="Erreur lors du chargement"
                errorUpdateText="Erreur lors de la mise à jour"
                notFoundText="Todo List introuvable"
            />
        </>
    )
}

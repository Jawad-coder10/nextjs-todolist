import React from 'react'
import DeleteTodolistPage from '@/components/dashboard/delete-todolist'

export default async function DeletePage({ params }: { params: Promise<{ id: string }> }) {
    const { id: idParam } = await params
    const id = Number(idParam)
    if (Number.isNaN(id)) {
        return <div>Todo List introuvable</div>
    }
    return (
        <DeleteTodolistPage
            id={id}
            pageTitle="Supprimer la Todo List"
            descriptionTemplate={'Êtes-vous sûr de vouloir supprimer "{title}" ?'}
            cancelButtonText="Annuler"
            confirmButtonText="Supprimer"
            confirmingText="Suppression..."
            notFoundText="Todo List introuvable"
            loadErrorText="Erreur lors du chargement"
            deleteErrorText="Erreur lors de la suppression"
        />
    )
}

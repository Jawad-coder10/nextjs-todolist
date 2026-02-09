import HeaderSection from '@/src/components/dashboard/header-section'
import Section from '@/src/components/dashboard/section'
import { data } from './data';

export default function DashboardPage() {
  return (
    <>
      <HeaderSection
        title="Ensemble de mes tâches"
        searchPlaceholder="Chercher une tâche..."
        buttonLabel="Ajouter une tâche"
        profileImage="/images/messi.jpg"
      />
      <Section
        activeLabel="En cours"
        completedLabel="Terminées"
        loadingText="Chargement..."
        errorText="Erreur lors du chargement des listes"
        noDescriptionText="Aucune description"
        createdPrefix="Créé le"
        editMenuLabel="Modifier"
        deleteMenuLabel="Supprimer"
        confirmDeleteTitle="Confirmer la suppression"
        confirmDeleteDescriptionTemplate={'Êtes-vous sûr de vouloir supprimer "{title}" ?'}
        confirmDeleteCancelLabel="Annuler"
        confirmDeleteConfirmLabel="Supprimer"
        confirmDeleteConfirmLoadingLabel="Suppression..."
        deleteErrorText="Erreur lors de la suppression"
      />
    </>
  )
}

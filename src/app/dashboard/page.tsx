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
        activeLabel="Active Task"
        completedLabel="Completed"
        loadingText="Chargement..."
        errorText="Erreur lors du chargement des listes"
        noDescriptionText="Aucune description"
        createdPrefix="Créé le"
      />
    </>
  )
}

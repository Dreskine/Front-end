import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      welcomeRecruiter: "Welcome to the recruiter area",
      accessRecruiterArea: "Access Recruiter Area",
      firstName: "First Name",
      lastName: "Last Name",
      position: "Position",
      applicationDate: "Application Date",
      status: "Status",
      viewMore: "View More",
      candidateList: "List of Candidates - IT Positions",
      candidateInfo: "Candidate Information",
      email: "Email",
      skills: "Skills",
      cv: "CV",
      downloadCv: "Download CV",
      applicationSubmitted: "Your application has been submitted successfully!",
      applicationForm: "Application Form",
      desiredPosition: "Desired Position",
      programmingLanguages: "Programming Languages",
      uploadCv: "Upload your CV",
      submitApplication: "Submit my application",
      enterFirstName: "Please enter your first name",
      firstNameMaxLength: "First name cannot exceed 30 characters",
      enterLastName: "Please enter your last name",
      lastNameMaxLength: "Last name cannot exceed 30 characters",
      enterEmail: "Please enter your email",
      validEmail: "Please enter a valid email address",
      enterPosition: "Please enter the desired position",
      chooseAtLeastOneLanguage: "Please choose at least 1 programming language",
      chooseLanguages: "Choose your programming languages",
      uploadCvMessage: "Please upload your CV",
      clickToUpload: "Click to Upload"
    }
  },
  fr: {
    translation: {
      welcomeRecruiter: "Bienvenue dans l'espace recruteurs",
      accessRecruiterArea: "Accéder à l'Espace Recruteurs",
      firstName: "Prénom",
      lastName: "Nom",
      position: "Poste",
      applicationDate: "Date de Candidature",
      status: "Statut",
      viewMore: "Voir Plus",
      candidateList: "Liste des Candidats - Postes Informatique",
      candidateInfo: "Informations du Candidat",
      email: "Email",
      skills: "Compétences",
      cv: "CV",
      downloadCv: "Télécharger le CV",
      applicationSubmitted: "Votre candidature a été soumise avec succès !",
      applicationForm: "Formulaire de Candidature",
      desiredPosition: "Poste souhaité",
      programmingLanguages: "Langages de programmation",
      uploadCv: "Télécharger votre CV",
      submitApplication: "Soumettre ma candidature",
      enterFirstName: "Veuillez entrer votre prénom",
      firstNameMaxLength: "Le prénom ne peut pas dépasser 30 caractères",
      enterLastName: "Veuillez entrer votre nom",
      lastNameMaxLength: "Le nom ne peut pas dépasser 30 caractères",
      enterEmail: "Veuillez entrer votre email",
      validEmail: "Veuillez entrer une adresse email valide",
      enterPosition: "Veuillez entrer le poste souhaité",
      chooseAtLeastOneLanguage: "Veuillez choisir au moins 1 langage de programmation",
      chooseLanguages: "Choisissez vos langages de programmation",
      uploadCvMessage: "Veuillez télécharger votre CV",
      clickToUpload: "Cliquez pour télécharger"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    supportedLngs: ['en', 'fr'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
    }
  });

export default i18n;
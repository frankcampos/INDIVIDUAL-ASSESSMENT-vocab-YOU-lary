import { signOut } from '../utils/auth';
import addVocabularyForm from '../components/forms/addVocabularyEntry';

const navigationEvents = () => {
  document.querySelector('#google-auth').addEventListener('click', signOut);

  document.querySelector('#create-entry').addEventListener('click', () => {
    console.warn('CLICKED CREATE ENTRY');
    addVocabularyForm();
  });
};

export default navigationEvents;

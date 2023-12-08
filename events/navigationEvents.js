import { signOut } from '../utils/auth';
import addVocabularyForm from '../components/forms/addVocabularyEntry';
import clearDom from '../utils/clearDom';

const navigationEvents = () => {
  document.querySelector('#google-auth').addEventListener('click', signOut);

  document.querySelector('#create-entry').addEventListener('click', () => {
    console.warn('CLICKED CREATE ENTRY');
    clearDom();
    addVocabularyForm();
  });
};

export default navigationEvents;

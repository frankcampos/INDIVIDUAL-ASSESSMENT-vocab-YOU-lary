import { signOut } from '../utils/auth';
import addVocabularyForm from '../components/forms/addVocabularyEntry';
import clearDom from '../utils/clearDom';
import { getvocabularyCards } from '../api/createVocabularyCard';
import showvocabularyEntry from '../pages/vocabulary';

const navigationEvents = (user) => {
  document.querySelector('#google-auth').addEventListener('click', signOut);

  document.querySelector('#create-entry').addEventListener('click', () => {
    console.warn('CLICKED CREATE ENTRY');
    clearDom();
    addVocabularyForm();
  });
  document.querySelector('#my-vocabulary').addEventListener('click', () => {
    console.warn('clicked my vocabulary button');
    clearDom();
    getvocabularyCards(user.uid).then(showvocabularyEntry);
  });
};

export default navigationEvents;

import { getvocabularyCards, deletevocabularyCard, getSingleVocabularyCard } from '../api/createVocabularyCard';
import addVocabularyForm from '../components/forms/addVocabularyEntry';
import showvocabularyEntry from '../pages/vocabulary';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // TODO: CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-vocabulary')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE CARD', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deletevocabularyCard(firebaseKey).then((data) => {
          console.warn(data);
          getvocabularyCards(user.uid).then(showvocabularyEntry);
        });
      }
    }

    if (e.target.id.includes('edit-vocabulary')) {
      console.warn('this is the id', e);
      const [, firebaseKey] = e.target.id.split('--');
      console.warn('this is mine firebasekey', firebaseKey);

      getSingleVocabularyCard(firebaseKey).then((bookObj) => addVocabularyForm(bookObj));
    }
  });
};

export default domEvents;

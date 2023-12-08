import { getvocabularyCards, deletevocabularyCard } from '../api/createVocabularyCard';
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
  });
};

export default domEvents;

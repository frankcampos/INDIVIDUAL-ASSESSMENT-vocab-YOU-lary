import { updateVocabularyCard, createVocabularyCard, getvocabularyCards } from '../api/createVocabularyCard';
import showvocabularyEntry from '../pages/vocabulary';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit',

    (e) => {
      console.warn(e);
      e.preventDefault();

      if (e.target.id.includes('submit-vocabulary-form')) {
        const payload = {
          title: document.querySelector('#title').value,
          definition: document.querySelector('#definition').value,
          languageOrtech: document.querySelector('#languageTech').value,
          uid: user.uid,
          timesubmitted: new Date().toLocaleString()
        };
        createVocabularyCard(payload).then(({ name }) => {
          console.warn('this createbook name', name);
          const patchPayload = { firebaseKey: name };

          updateVocabularyCard(patchPayload).then(() => {
            getvocabularyCards(user.uid).then(showvocabularyEntry);
          });
        });
      }
    });
};

export default formEvents;

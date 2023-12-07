import { updateVocabularyCard, createVocabularyCard } from '../api/createVocabularyCard';
import clearDom from '../utils/clearDom';

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
          uid: user.uid
        };
        createVocabularyCard(payload).then(({ name }) => {
          console.warn('this createbook name', name);
          const patchPayload = { firebaseKey: name };
          updateVocabularyCard(patchPayload);
          clearDom();
        });
      }
    });
};

export default formEvents;

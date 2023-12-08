import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const showvocabularyEntry = (array) => {
  clearDom();

  let domString = '';

  array.forEach((vocabularyItem) => {
    domString += `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${vocabularyItem.title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${vocabularyItem.languageOrtech}</h6>
    <p class="card-text">${vocabularyItem.definition}</p>
    <button class="btn btn-primary" id="edit-vocabulary-btn--${vocabularyItem.firebaseKey}">Edit</button>
    <button class="btn btn-danger" id="delete-vocabulary-btn--${vocabularyItem.firebaseKey}">Delete</button>
  </div>
</div>`;
  });
  renderToDOM('#store', domString);
};

export default showvocabularyEntry;

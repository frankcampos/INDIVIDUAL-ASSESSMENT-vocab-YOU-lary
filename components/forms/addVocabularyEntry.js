import renderToDOM from '../../utils/renderToDom';

const addVocabularyForm = (vocabularyEntryObjParam = {}) => {
  // clearDom(); // Uncomment if you need to clear previous content

  const vocabularyEntryObj = { ...vocabularyEntryObjParam };
  const isUpdate = Boolean(vocabularyEntryObj.firebaseKey);
  const domString = `
    <form id="${isUpdate ? `update-vocabulary-form--${vocabularyEntryObj.firebaseKey}` : 'submit-vocabulary-form'}" class="mb-4">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" value="${vocabularyEntryObj.title || ''}" placeholder="Enter a word or phrase" required>
      </div>
      <div class="form-group">
        <label for="definition">Definition</label>
        <input type="text" class="form-control" id="definition" value="${vocabularyEntryObj.definition || ''}" placeholder="Enter a definition" required>
      </div>
      <div class="form-group">
        <label for="languageTech">Language/Tech</label>
        <select class="form-control" id="languageTech">
            <option selected>${vocabularyEntryObj.languageTech || 'Placeholder'}</option>
            <!-- Add more language/tech options here -->
        </select>
      </div>
      <button type="submit" class="btn btn-primary mt-3">${isUpdate ? 'Update' : 'Submit'} Vocabulary</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addVocabularyForm;

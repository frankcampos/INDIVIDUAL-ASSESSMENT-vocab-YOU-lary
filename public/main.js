// USE WITH FIREBASE AUTH
import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const init = () => {
  // USE WITH FIREBASE AUTH
  ViewDirectorBasedOnUserAuthStatus();
  document.querySelector('#welcome').innerHTML = 'Welcome to Vocab-YOU-lary!';
};

init();

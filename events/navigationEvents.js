import { signOut } from '../utils/auth';

const navigationEvents = () => {
  document.querySelector('#google-auth').addEventListener('click', signOut);

  document.querySelector('#create-entry').addEventListener('click', () => {
    console.warn('CLICKED CREATE ENTRY');
  });
};

export default navigationEvents;

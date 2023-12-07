import logoutButton from '../components/logoutButton';
import navBar from '../components/shared/navBAr';
import domBuilder from '../components/shared/domBuilder';
import navigationEvents from '../events/navigationEvents';
import formEvents from '../events/formEvents';

const startApp = (user) => {
  domBuilder();
  navBar();
  logoutButton();
  navigationEvents(user);
  formEvents(user);
};

export default startApp;

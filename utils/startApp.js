import logoutButton from '../components/logoutButton';
import navBar from '../components/shared/navBAr';
import domBuilder from '../components/shared/domBuilder';
import navigationEvents from '../events/navigationEvents';

const startApp = (user) => {
  domBuilder();
  navBar();
  logoutButton();
  navigationEvents(user);
};

export default startApp;

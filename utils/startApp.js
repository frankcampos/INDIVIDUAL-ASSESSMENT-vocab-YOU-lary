import logoutButton from '../components/logoutButton';
import navBar from '../components/shared/navBAr';
import domBuilder from '../components/shared/domBuilder';

const startApp = () => {
  domBuilder();
  navBar();
  logoutButton();
};

export default startApp;

import renderToDOM from '../../utils/renderToDom';

const navBar = () => {
  const domString = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">logo</a>
        <div class="d-lg-flex justify-content-end">
          <a href="#" class="btn btn-info me-2" id="create-entry">Create New Entry</a>
          <a href="#" id="logout">Logout</a>
        </div>
      </div>
    </nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;

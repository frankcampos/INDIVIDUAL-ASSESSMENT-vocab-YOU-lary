import renderToDOM from '../../utils/renderToDom';

const navBar = () => {
  const domString = `
  <<nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
  <div class="container-fluid">
      <a class="navbar-brand" href="#">logo</a>

      <!-- Centered button -->
      <div class="mx-auto">
          <a href="#" class="btn btn-primary" id="my-vocabulary">My Vocabulary</a>
      </div>

      <!-- Search Form with margin right -->
      <form class="d-flex mr-3" role="search">
          <input class="form-control me-2" type="search" id='search' placeholder="Search" aria-label="Search">
         
      </form>

      <div class="d-lg-flex justify-content-end">
          <a href="#" class="btn btn-info me-2" id="create-entry">Create New Entry</a>
          <a href="#" id="logout">Logout</a>
      </div>
  </div>
</nav>

`;

  renderToDOM('#navigation', domString);
};

export default navBar;

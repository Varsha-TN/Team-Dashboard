const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex ms-auto">
            <select className="form-select">
              <option value="team">Team</option>
            </select>
            <input
              className="form-control me-2 ms-3"
              type="input"
              placeholder="Team Name"
              aria-label="Search"
            />
            <button className="btn btn-outline-warning">Create</button>
          </form>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top ">
        <div className="container">
          <a href="" className="navbar-brand nav-item">
            Home
          </a>
          <div className="collapse navbar-collapse d-flex justify-content-end pr-3">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="" className="nav-link">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;

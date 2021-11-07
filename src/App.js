import { Provider } from "react-redux";
import { createStore } from "redux";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import teamReducer from "./redux/reducer/teamReducer";

const store = createStore(teamReducer);
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AllRoutes from "./AllRoutes";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AllRoutes />
      </div>
    </Provider>
    
  );
}

export default App;

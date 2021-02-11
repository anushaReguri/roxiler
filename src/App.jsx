import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoList from '../src/pages/ToDoList'

function App() {
  return (
    <div className="App">
     <ToDoList/>
    </div>
  );
}

export default App;

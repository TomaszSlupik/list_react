import './App.scss';
import Tasks from './components/Tasks/Tasks';
import Layout from './layout/Layout';


function App() {
  return (
    <div>
      <Layout 
    
      tasks={<Tasks />}
      />
    </div>
  );
}

export default App;

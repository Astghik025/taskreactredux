import './App.css';
import { Route, Routes } from 'react-router-dom';
import Employees from './components/Employees/Employees';
import Tasks from './components/Tasks/Tasks';
import Profile from './components/Profile/Profile';
import HomeWrapper from './pages/HomeWrapper';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeWrapper />}>
          <Route index element={<Employees />} />
          <Route path='tasks' element={<Tasks />} />
          <Route path=':id/uniq' element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import { Outlet } from 'react-router-dom';

function App() {
  import Navbar from './components/Navbar';
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;

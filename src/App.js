import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routers } from './Routers/Routers/Routers';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <RouterProvider router={routers}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;

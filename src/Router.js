import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

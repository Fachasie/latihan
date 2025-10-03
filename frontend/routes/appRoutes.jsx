import { Routes, Route, Navigate } from 'react-router-dom';
import TabelView from '../src/components/tabelview';
import EditProduk from '../src/components/editProduk';
import CreateNewProduk from '../src/components/createNewProduk';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/products" />} />
      <Route path="/products" element={<TabelView />} />
      <Route path="/edit/:id" element={<EditProduk />} />
      <Route path="/create" element={<CreateNewProduk />} />
    </Routes>
  );
};

export default AppRoutes;
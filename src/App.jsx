import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';
import ItemDetail from './components/ItemDetail';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ItemList />} />
                <Route path="/create" element={<ItemForm />} />
                <Route path="/edit/:id" element={<ItemForm />} />
                <Route path="/item/:id" element={<ItemDetail />} />
                <Route path="/delete/:id" element={<ItemList />} />
            </Routes>
        </Router>
    );
}

export default App;

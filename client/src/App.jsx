import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import './index.css'
import Contacts from './components/contacts/Contacts';
import SearchContacts from './components/search/SearchContacts';
import NewContact from './components/contacts/NewContact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import ContactDetails from './components/contacts/ContactDetails';
axios.defaults.withCredentials=true;

function App() {
  return (
    <Router>
      <ToastContainer theme='dark' position='top-center' autoClose={3000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/contact/:id' element={<ContactDetails />} />
        <Route path='/new' element={<NewContact />} />
        <Route path='/search/' element={<SearchContacts />} />
      </Routes>
    </Router>
  )
}

export default App

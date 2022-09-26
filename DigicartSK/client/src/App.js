
import Home from './components/Home/Home';
//Components Exporting
import Header from './components/header/Header';
import {Box} from '@mui/material';
import DetailView from './components/details/DetailView';
import DataProvider from './context/DataProvider';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Cart from './components/Cart/Cart';
import BuyDumy from './components/Cart/BuyDumy';

function App() {
  return (
    <DataProvider >
      <BrowserRouter>
      <Header/>
      <Box style={{marginTop:54}}>
        <Routes>
          <Route path='/'element={ <Home />}/>    
          <Route path='/product/:id'element={<DetailView/>} />
          <Route path='/cart'element={<Cart/>}/>
          <Route path='/pay'element={<BuyDumy/>}/>

        </Routes>
      </Box>
      </BrowserRouter>
     
    </DataProvider>
  );
}

export default App;

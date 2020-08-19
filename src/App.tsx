import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Page from './pages/Page';
import GlobalStyles from './styles/global'

function App() {
  return (
    <BrowserRouter>
      <Header 
        name={'Kayne Gonçalves'}
        avatarUrl={'https://avatars0.githubusercontent.com/u/38166267?s=460&u=fb812dfa1f67b662d9e51a654dd8e70a9635211d&v=4'}
        company={'Healthbit'}
        insurance={'Unimed'}
      /> 
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/:menu/:page" element={<Page/>}/>
      </Routes>

      <GlobalStyles/>
    </BrowserRouter>
  );
}

export default App;

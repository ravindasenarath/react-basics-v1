import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About } from './About';
import { Layout } from './Layout';
import { Todo } from './Todo';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='todo' element={<Todo/>}/>
          <Route path='about' element={<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;



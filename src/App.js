import './App.scss';
import Wrapper from './components/Wrapper'
import Main from "./containers/Main";
import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Bank from "./containers/Bank";
import Video from "./containers/Video";
import CounterPage from "./containers/CounterPage";
import Parralax from "./containers/Parralax";
import {ToDoList} from "./containers/ToDoList";
import Counter2 from "./containers/Counter2";


function App() {
  return (
      <BrowserRouter>
      <Wrapper>
          <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/counter' element={<CounterPage/>}/>
              <Route path='/bank' element={<Bank />} />
              <Route path='/video' element={<Video/>} />
              <Route path='/parralax' element={<Parralax/>} />
              <Route path="/todolist" element={<ToDoList/>}/>
              <Route path="/counter2" element={<Counter2/>}/>
              <Route path="*" element={<main style={{ padding: "1rem", color: "white", fontSize: 80, textAlign: 'center', flex: '1 1 auto',
                  flexGrowe: '1', background: 'darkblue' }}>
                  <p>There's nothing here yet!</p>
              </main>}/>
          </Routes>
      </Wrapper>
      </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';

const App = () => {
  return (
    
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    
  );
};

export default App;

import React from 'react';

import Input from "./Components/TodoInput";
import List from "./Components/TodoList";
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="container">
      <div className="row">

        <div className="col-4 bg-warning"><Input /></div>
        <div className="col-4 bg-primary"><List /></div>

      </div>
    </div>
  );
}

export default App;

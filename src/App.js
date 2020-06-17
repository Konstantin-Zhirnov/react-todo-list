import React, {Fragment} from 'react';
import ToDo from './containers/todo/todo'
import Title from './components/title/title'

function App() {
  return (
    <Fragment>
      <Title title="Список дел" />        
      <ToDo />
    </Fragment>
  );
}

export default App;

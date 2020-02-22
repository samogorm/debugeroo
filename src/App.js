import React from 'react';

import Button from './components/button/button';

const App = () => (
  <div className="App">
    <Button
      label="Test Button"
      action={ () => console.log('Clicked')}
    />
    <Button
      label="Test Button"
      type="light"
      action={ () => console.log('Clicked')}
    />
     <Button
      label="Test Button"
      type="danger"
      action={ () => console.log('Clicked')}
    />
  </div>
);

export default App;

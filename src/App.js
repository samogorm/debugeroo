import React from 'react';

import Button from './components/button/button';

const App = () => (
  <div className="app">
    <Button
      label="Test Button"
      action={ () => console.log('Clicked')}
    />
  </div>
);

export default App;

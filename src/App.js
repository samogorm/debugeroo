import React from 'react';

import Button from './components/button/button';
import Logo from './components/logo/logo';

const App = () => (
  <div className="app">
    <Button
      label="Test Button"
      action={ () => console.log('Clicked')}
    />

    <Logo />
  </div>
);

export default App;

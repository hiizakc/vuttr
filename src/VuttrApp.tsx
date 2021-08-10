import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { VuttrProvider } from './context/VuttrContext';
import Dashboard from './views/Dashboard';

function VuttrApp() {
  return (
    <VuttrProvider>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </VuttrProvider>
  );
}

export default VuttrApp;

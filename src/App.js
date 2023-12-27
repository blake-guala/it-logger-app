import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js';
import { Fragment, useEffect } from 'react';
import { Search } from './Component/layout/SearchNavbar';
import { Logs } from './Component/logs/Logs';
import { AddBtn } from './Component/layout/AddBtn';
import { AddLogsModal } from './Component/logs/AddLogsModal';
import { Alert } from './Component/layout/Alert';
import { EdiLogModal } from './Component/logs/EditLogModal';
import { AddTechModal } from './Component/techs/AddTechModal';
import { TechListModal } from './Component/techs/TechListModal';

function App() {
  useEffect(() => {
    // initializes materialize JS
    M.AutoInit()
  })
  return (
    <Fragment>
      <TechListModal/>
      <Search/>
      <Alert/>
      <AddTechModal/>
      <AddLogsModal/>
      <EdiLogModal/>
      <Logs/>
      <AddBtn/>
    </Fragment>
  );
}

export default App;

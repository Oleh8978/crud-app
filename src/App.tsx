import React from 'react';
import { connect } from 'react-redux';

// components
import ListEmployers from './components/listEmployers';
import Loader from './components/loader';
import ErrorWarning from './components/erroPlate';

// interfaces 
import { IStore } from './controllers/interfaces';
import { ISmallLoader } from './controllers/smallLoaders/models';

export interface IProps {
  loader: boolean,
  otherLoaders: ISmallLoader[],
}

const App: React.FC<IProps> = (props) =>{

  const body = () => {
    if (props.loader && props.otherLoaders.length === 0) {
      return <Loader />
    }

    return <ListEmployers />

  }

  return (
    <div className="main">
      {body()}
      <ErrorWarning />
    </div>
  );
}

export default connect((store: IStore) => ({
  loader: store.loader.loader,
  otherLoaders: store.smallLoader.loaders,
}))(App);

import React from 'react';
import { connect } from 'react-redux';

// components
import Image from '../imageOnError/index';
import StatusBtn from '../statusBtn'

// interfaces
import { IPerson } from '../../controllers/crudPeople/models';
import { IStore } from '../../controllers/interfaces';
import { ISmallLoader } from '../../controllers/smallLoaders/models';

interface IProps {
  data: IPerson,
  loaders: ISmallLoader[]
}

const  ListItem: React.FC<IProps> = (props) =>{

  if (props.loaders.filter(item => item.id === props.data.id).length !== 0) {
    return (
      <div className="list-item">
        <div className="list-item-loader">Loading...</div>
      </div>
    )
  }

  return (
    <div className="list-item">
      <Image uri={props.data.avatar} />
      <div className='list-item-info-holder'>
        <div className='list-item-fname'>First name: {props.data.name}</div>
        <div className='list-item-lname'>Last name: {props.data.surname}</div>
      </div>
      <StatusBtn data={props.data}/>
    </div>
  );
}

export default connect((store: IStore) => ({
  people: store.people.response,
  loaders: store.smallLoader.loaders
}))(ListItem);
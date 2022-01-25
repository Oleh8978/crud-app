import React from 'react';
import { connect, useDispatch } from 'react-redux';

// components
import StatusBtn from '../statusBtn';
import SubmitBtn from '../submitBtn';

import * as actions from '../../controllers/newEmployerReducer/actions';

// interfaces
import { IStore } from '../../controllers/interfaces';
import { IPerson } from '../../controllers/crudPeople/models';

interface IProps {
  newEmployer: IPerson
}

const  AddEmployer: React.FC<IProps> = (props) =>{

  const dispatch = useDispatch();

  return (
        <div className='add-employer'>
          <div className='add-employer-names-holder'>
            <div className='input-wrapper'>
              <div className='input-txt'>Link to image: </div>&nbsp;
              <input 
                className='input-holder link'
                placeholder='http://somelink'
                value={props.newEmployer.avatar}
                onChange={(e) => dispatch(actions.setImageLink(e.target.value))}
              ></input>
            </div>
            <div className='input-wrapper'>
              <div className='input-txt'>First name: </div>&nbsp;
              <input 
                className='input-holder name'
                placeholder='Test name'
                value={props.newEmployer.name}
                onChange={(e) => dispatch(actions.setFistName(e.target.value))}
              ></input>
            </div>
            <div className='input-wrapper'>
             <div className='input-txt'>Last name: </div>&nbsp;
             <input 
              className='input-holder surname'
              placeholder='Test surname'
              value={props.newEmployer.surname}
              onChange={(e) => dispatch(actions.setLastName(e.target.value))}
            ></input>
            </div>
          </div>
          <StatusBtn 
            data={{ ...props.newEmployer}}
            addNewPerson
          />
          <SubmitBtn />
        </div>
  );
}

export default connect((store: IStore) => ({
  newEmployer: store.newPerson
}))(AddEmployer);
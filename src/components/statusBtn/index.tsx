import React from 'react';
import { connect, useDispatch } from 'react-redux';

// actions 
import * as actions from '../../controllers/crudPeople/actions';
import * as newPersonActions from '../../controllers/newEmployerReducer/actions';

// interfaces
import { IPerson } from '../../controllers/crudPeople/models';

// constants 
import * as CONSTANTS from '../../config/constants';
import { IStore } from '../../controllers/interfaces';

interface IProps {
  data: IPerson,
  newPerson: IPerson,
  addNewPerson?: boolean,
}

const  StatusBtn: React.FC<IProps> = (props) =>{

  const dataPerson = props.addNewPerson ? props.newPerson : props.data

  const dispatch = useDispatch();

  const setStatus = () => {

    if (props.addNewPerson) {
      return dispatch(newPersonActions.setStatus(dataPerson.status))
    }

    return dispatch(actions.updatePeopleById.request({
      ...props.data,
      status: dataPerson.status === CONSTANTS.APPROVED ? CONSTANTS.NOT_APPROVED : CONSTANTS.APPROVED
    })) 
  }

  return (
        <div 
          className={`list-item-status ${dataPerson.status !== CONSTANTS.APPROVED ? 'notapproved' : 'approved'} staustest`}
          onClick={() => {setStatus()}}
        >
          {dataPerson.status !== CONSTANTS.APPROVED ? `NOT ${CONSTANTS.APPROVED}` : CONSTANTS.APPROVED}
      </div>
  );
}

export default connect((store: IStore) => ({
  people: store.people.response,
  newPerson: store.newPerson
}))(StatusBtn);
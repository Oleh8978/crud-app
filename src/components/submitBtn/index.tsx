import React from 'react';
import { connect, useDispatch } from 'react-redux';

// actions 
import { setNewError } from '../../controllers/errorReducer/action';
import { addPeople } from '../../controllers/crudPeople/actions';

// interfaces
import { IStore } from '../../controllers/interfaces';
import { IPerson } from '../../controllers/crudPeople/models';

// constants
import * as constants from '../../config/validationErrors';

interface IProps {
    newEmployer: IPerson
}

const  SubmitBtn: React.FC<IProps> = (props) =>{

    const dispatch = useDispatch();

    const submitData = () => {

        const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

        if (props.newEmployer.avatar.trim().length === 0) {
            return dispatch(setNewError({id: Math.random(), type: constants.LINK_TO_IMAGE_IS_INVALID }))
        }

        if (props.newEmployer.name.trim().length === 0 || format.test(props.newEmployer.name)) {
            return dispatch(setNewError({id: Math.random(), type: constants.FIRST_NAME_IS_INVALID }))
        }

        if (props.newEmployer.surname.trim().length === 0 || format.test(props.newEmployer.surname)) {
            return dispatch(setNewError({id: Math.random(), type: constants.LAST_NAME_IS_INVALID}))
        }

        return dispatch(addPeople.request({...props.newEmployer}))
    }

  return (
        <div 
            className={'list-item-status submit'}
            onClick={() => submitData()}
        >
            Submit
        </div>
  );
}

export default connect((store: IStore) => ({
    newEmployer: store.newPerson
  }))(SubmitBtn);
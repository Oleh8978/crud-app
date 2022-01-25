import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

// actions 
import * as actions from '../../controllers/crudPeople/actions';

// components 
import ListItem from '../listItem';
import AddEmployer from '../addEmployer';

// interfaces 
import { IStore } from '../../controllers/interfaces';
import { IPerson } from '../../controllers/crudPeople/models';
import { IError } from '../../controllers/errorReducer/models';

// constants
import { GET_ERROR } from '../../config/constants';

interface IProps {
  people: IPerson[],
  errors: IError[],
}

const  ListEmployers: React.FC<IProps> = (props) => {

  const dispatch = useDispatch();

  useEffect(() => {

    if (props.errors.filter(item => item.type === GET_ERROR).length === 0 && props.people.length === 0) {
      dispatch(actions.getPeople.request())
    }

  }, [props.people])

  return (
    <div className="list">
      <AddEmployer />
      {props.people.map(item => {
        return <ListItem key ={item.id} data={item} />
      })}
    </div>
  );
}

export default connect((store: IStore) => ({
  people: store.people.response,
  errors: store.errors.errors
}))(ListEmployers);
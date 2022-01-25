
import { appName } from "../../config/constants";
import { createAsyncAction} from "typesafe-actions";

import { IPerson } from './models';

/* Actions */
export const widgetName = "USERS_MANAGE_ACTIONS";

export const getPeople = createAsyncAction(
  `${appName}/${widgetName}/GET_REQUEST`,
  `${appName}/${widgetName}/GET_SUCCESS`,
  `${appName}/${widgetName}/GET_FAILED`
)<undefined, IPerson[], string>();

export const addPeople = createAsyncAction(
  `${appName}/${widgetName}/POST_REQUEST`,
  `${appName}/${widgetName}/POST_SUCCESS`,
  `${appName}/${widgetName}/POST_FAILED`
)<IPerson, IPerson, string>();

export const updatePeopleById = createAsyncAction(
  `${appName}/${widgetName}/PUT_REQUEST`,
  `${appName}/${widgetName}/PUT_SUCCESS`,
  `${appName}/${widgetName}/PUT_FAILED`
)<IPerson, IPerson, string>();
  
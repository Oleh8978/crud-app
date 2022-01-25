import { appName } from "../../config/constants";
import {createAction } from "typesafe-actions";

import { IPerson } from "../crudPeople/models";

/* Actions */
export const widgetName = "NEW_PERSON";

export const setFistName = createAction(
    `${appName}/${widgetName}/SET_FIRST_NAME`
  )<string>();

export const setLastName = createAction(
    `${appName}/${widgetName}/SET_LAST_NAME`
)<string>();

export const setImageLink = createAction(
    `${appName}/${widgetName}/SET_IMG_LINK`
)<string>();

export const setStatus = createAction(
    `${appName}/${widgetName}/SET_STATUS`
)<string>();
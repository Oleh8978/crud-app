import { appName } from "../../config/constants";
import {createAction } from "typesafe-actions";

import { ISmallLoader } from "./models";

/* Actions */
export const widgetName = "ERROR_ADDER";

export const setNewLoader = createAction(
    `${appName}/${widgetName}/SET_ERROR`
  )<ISmallLoader>();

export const removeLoader = createAction(
    `${appName}/${widgetName}/REMOVE_ERROR`
)<ISmallLoader>();
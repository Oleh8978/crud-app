import { appName } from "../../config/constants";
import {createAction } from "typesafe-actions";

import { ILoaderState } from "./models";

/* Actions */
export const widgetName = "LOADER";

export const setLoader = createAction(
    `${appName}/${widgetName}/SET_LOADER`
  )<ILoaderState>();
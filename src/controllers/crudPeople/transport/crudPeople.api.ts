import { Config } from "../../../config/api";
import { handleErrors } from "../../../utils/API";

import { IPerson } from '../models';

class API {

public async getPeopleList(): Promise<IPerson[]> {
  
    let googleRequestURL = new URL(Config.COMBINED_MAIN_ENDPOINT + 'users/');
    return handleErrors(
      fetch(googleRequestURL.toString(), {
        method: "GET",
      })
    );
}

public async addNewUser(user: IPerson): Promise<IPerson> {
  
    let googleRequestURL = new URL(Config.COMBINED_MAIN_ENDPOINT + 'users/');
    return handleErrors(
      fetch(googleRequestURL.toString(), {
        method: "POST",
        body: JSON.stringify({ ...user }),
      })
    );
}

public async updateUserStatus(user: IPerson): Promise<IPerson> {
  
    let googleRequestURL = new URL(Config.COMBINED_MAIN_ENDPOINT + `users/${user.id}`);
    return handleErrors(
      fetch(googleRequestURL.toString(), {
        method: "PUT",
        body: JSON.stringify({ ...user }),
      })
    );
}

}

export const UsersAPI = new API();
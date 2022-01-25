import { Config } from "../../../config/api";
import { handleErrors } from "../../../utils/API";

import { IPerson, } from '../models';

class API {

public async getPeopleList(): Promise<IPerson[]> {
  
    const googleRequestURL = new URL(Config.COMBINED_MAIN_ENDPOINT + 'users/');

    return handleErrors(
      fetch(googleRequestURL.toString(), {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
      })
    );
}

public async addNewUser(user: IPerson): Promise<IPerson> {
  
    const googleRequestURL = new URL(Config.COMBINED_MAIN_ENDPOINT + 'users/');

    const newUser = {
      name: user.name,
      avatar: user.avatar,
      surname: user.surname,
      status: user.status,
    }

    return handleErrors(
      fetch(googleRequestURL.toString(), {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...newUser }),
      })
    );
}

public async updateUserStatus(user: IPerson): Promise<IPerson> {
  
    const googleRequestURL = new URL(Config.COMBINED_MAIN_ENDPOINT + `users/${user.id}`);

    console.log('user status ', user)

    return handleErrors(
      fetch(googleRequestURL.toString(), {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...user }),
      })
    );
}

}

export const UsersAPI = new API();
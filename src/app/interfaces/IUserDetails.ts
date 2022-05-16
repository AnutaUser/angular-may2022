import {IAddress} from "./IAddress";
import {ICompany} from "./ICompany";
import {IUser} from "./IUser";

export interface IUserDetails extends IUser {
  id: number,
  name: string,
  username: string,
  email: string,
  address: IAddress,
  phone: string,
  website: string,
  company: ICompany
}

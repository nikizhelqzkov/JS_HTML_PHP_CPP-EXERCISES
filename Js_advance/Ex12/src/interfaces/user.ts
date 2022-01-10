export interface IUser {
  userId: number;
  name: string;
  username: string;
  email: string;
}
export interface IUserDetail extends IUser {
    address:IAddress;
    phone: string;
    website: string;
    company:ICompany;
}
export interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo:Icoordinates;
}
export interface Icoordinates {
    lat: string;
    lng: string;
}
export interface ICompany {
    name: string;
    catchPhrase: string;
    bs: string;
}
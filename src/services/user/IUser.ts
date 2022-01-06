import TUser from './TUser';

interface IUser {
  type: TUser;
  _id: string;
  amount: number;
  name: {
    first: string;
    last: string;
  };
  company: string;
  email: string;
  phone: string;
  address: string;
}

export default IUser;

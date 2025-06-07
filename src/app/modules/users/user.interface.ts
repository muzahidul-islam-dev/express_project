export type TUser = {
  id: string;
  password: string;
  needsPasswordChange: boolean;
  role: 'admin' | 'faculty' | 'student';
  isDeleted: boolean;
  status: 'in-progress' |'blocked';
}


export type NewUser = {
  password?: string;
  role: string;
  id: string;
}
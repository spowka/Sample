export type UserStatus = 'male' | 'female' | 'other';

export interface UserModel {
  id?: number;
  name?: string;
  dateOfBirth: string;
  email: string;
  status: UserStatus;
  hourlyRate?: number;
}

export enum UserStatuses {
  male = 'male',
  female = 'female',
  other = 'other',
}

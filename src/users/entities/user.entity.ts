import { User } from '@prisma/client';

export class UserEntity implements User {
  id: number;
  name: string;
  age: number;
  document: string;
  email: string;
  tel: string;
  createdAt: Date;
  updateAt: Date;
  amount: number;
}

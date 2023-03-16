import { Contact } from '@prisma/client';

export class ContactEntity implements Contact {
  id: number;
  name: string;
  email: string;
  tel: string;
  message: string;
  createdAt: Date;
  updateAt: Date;
}

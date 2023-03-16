import { Driver } from '@prisma/client';

export class DriverEntity implements Driver {
  id: number;
  name: string;
  age: number;
  driverLicense: string;
  salary: number;
  document: string;
  email: string;
  tel: string;
  adm: boolean;
  createdAt: Date;
  updateAt: Date;
}

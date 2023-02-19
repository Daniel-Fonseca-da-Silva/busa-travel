import { Driver } from '@prisma/client';

export class DriverEntity implements Driver {
  id: number;
  name: string;
  age: number;
  driverLicense: string;
  salary: number;
  createdAt: Date;
  updateAt: Date;
}

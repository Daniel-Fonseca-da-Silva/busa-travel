import { Bus } from '@prisma/client';

export class BusEntity implements Bus {
  id: number;
  name: string;
  capacity: number;
  year: string;
  color: string;
  createdAt: Date;
  updateAt: Date;
}

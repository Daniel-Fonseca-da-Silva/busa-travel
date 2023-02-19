import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TicketsModule } from './tickets/tickets.module';
import { BusesModule } from './buses/buses.module';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, TicketsModule, BusesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

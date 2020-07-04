import { Module } from '@nestjs/common';
import { BikeRepositoryModule } from '../repository/repository.module';
import { AliveService, SystemService } from './system';
import { UserService } from './user';

// Here are the service for global using in other modules
const businessServices: any[] = [
  AliveService,
  UserService,
  SystemService,
];


@Module({
  imports: [
    BikeRepositoryModule,
  ],
  providers: [
    ...businessServices,
  ],
  exports: [
    ...businessServices,
  ]
})
export class BikeBusinessModule {
}

import { Module } from '@nestjs/common';
import { SystemController } from './system.controller';
import { BikeBusinessModule } from '../business/business.module';
import { LoginController } from './login.controller';
import { RegisterController } from './register.controller';
import { UserController } from './user.controller';


@Module({
  imports: [
    BikeBusinessModule,
  ],
  controllers: [
    SystemController,
    LoginController,
    RegisterController,
    UserController,
  ],
})
export class BikeControllerModule {
}

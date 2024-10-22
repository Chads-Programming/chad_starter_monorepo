import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ClerkAuthService } from './clerk-auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { EmailAvailableConstraint } from './validations/email-available';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({}), 
    PassportModule,
    UsersModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  providers: [
    AuthService,
    JwtStrategy,
    EmailAvailableConstraint,
    ClerkAuthService,
  ],
  controllers: [AuthController],
})
export class AuthModule {}

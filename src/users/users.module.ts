/*
 * SPDX-FileCopyrightText: 2020 The HedgeDoc developers (see AUTHORS file)
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerModule } from '../logger/logger.module';
import { AuthToken } from './auth-token.entity';
import { Identity } from './identity.entity';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, AuthToken, Identity]),
    LoggerModule,
  ],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}

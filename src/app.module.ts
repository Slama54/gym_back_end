import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MemberModule } from './member/member.module';

@Module({
  imports: [UserModule, MemberModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  IsDate,
  IsEmail,
  IsOptional,
  IsString,
  IsStrongPassword,
  IsUrl,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsEmail()
  @IsOptional()
  email: string;
  @IsString()
  @IsUrl()
  @IsOptional()
  profilePicture: string;
  @IsStrongPassword()
  password: string;
  @IsDate()
  dateOfBirth: Date;
  @IsString()
  @IsOptional()
  phoneNumber: string;
  @IsString()
  @IsOptional()
  address: string;
  @IsString()
  @IsOptional()
  bio: string;
}

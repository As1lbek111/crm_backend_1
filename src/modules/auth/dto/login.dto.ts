import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'asil.list.mamadiyev@gmail.com' })
  @IsString()
  login: string;

  @ApiProperty({ example: 'asil@156' })
  @IsString()
  password: string;
}

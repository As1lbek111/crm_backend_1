import {
  IsString,
  IsInt,
  IsOptional,
  IsEnum,
  IsDecimal,
  IsNumber,
} from 'class-validator';
import { Type } from 'class-transformer';
import { Status, CourseLevel } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCourseDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsInt()
  @Type(() => Number)
  durationMonth: number;

  @ApiProperty()
  @IsInt()
  @Type(() => Number)
  durationLesson: number;

  @ApiProperty()
  @IsOptional()
  @IsEnum(CourseLevel)
  level?: CourseLevel;

  @ApiProperty()
  @IsNumber()
  price: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  description?: string;
}

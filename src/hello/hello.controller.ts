import { Controller, Get, Req, Res, HttpCode, Param, ParseIntPipe, Query } from '@nestjs/common';
import { Request, Response } from 'express';
import { IsString, IsInt } from 'class-validator';
import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';

@Injectable()
class ParseBooleanPipe implements PipeTransform<string, boolean> {
  transform(value: string, metadata: ArgumentMetadata): boolean {
    if (value === 'true' || value === '1') {
      return true;
    }
    if (value === 'false' || value === '0') {
      return false;
    }
    throw new BadRequestException('Validation failed: status must be a boolean');
  }
}

class GreetQueryDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;
}

@Controller()
export class HelloController {

  @Get('/hello')
  index(@Req() request: Request, @Res() response: Response) {
    console.log(request.url); // Muestra la dirección de URL en la consola
    response.status(200).json({
      message: 'Hello World',
    });
  }

  @Get('/new')
  @HttpCode(201)
  somethingNew() {
    return 'Something new';
  }

  @Get('/notfound')
  @HttpCode(404)
  notFoundPage() {
    return '404 not found';
  }

  @Get('/error')
  @HttpCode(500)
  errorPage() {
    return 'Error Route!';
  }

  // PIPE(Errores)
  @Get('/ticket/:num')
  getNumber(@Param('num', ParseIntPipe) num: number) {
    console.log(typeof num); // Verifica el tipo de dato
    return num + 14;
  }

  @Get('/active/:status')
  isUserActive(@Param('status', ParseBooleanPipe) status: boolean) {
    console.log(typeof status); // Verifica el tipo de dato
    return status;
  }

  // PIPE(personalizado)
  @Get('/greet')
  greet(@Query(ValidateuserPipe) query: GreetQueryDto) {
    console.log(typeof query.name); // Verifica el tipo de dato
    console.log(typeof query.age); // Verifica el tipo de dato
    return `Hello ${query.name}, you are ${query.age} years old`;
  }
}
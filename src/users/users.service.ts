import { PrismaService } from '@app/db/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

  constructor(private prismaService: PrismaService) { }

  create(createUserDto: CreateUserDto) {
    return this.prismaService.user.create({
      data: createUserDto,
    })
  }

  // create(data: Prisma.UserCreateInput) {
  //   return this.prismaService.user.create({
  //     data: data,
  //   })
  // }

  // create(createUserDto: CreateUserDto) {
  //   return this.prismaService.user.create({
  //     data: { name: 'Ali', email: 'ali@email.com', password: '1234567' }
  //   })
  // }

  findAll() {
    let users = this.prismaService.user.findMany();
    return users;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

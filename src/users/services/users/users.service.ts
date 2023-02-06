import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/services/prisma/prisma.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class UsersService {

    constructor(private readonly prisma: PrismaService) {}

    async createUser(user: CreateUserDto) {
        const createdUser = await this.prisma.user.create({ data: user });
        return createdUser;
    }


}

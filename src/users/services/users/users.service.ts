import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/services/prisma/prisma.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { hashPassword } from 'src/utils/bcrypt';

@Injectable()
export class UsersService {

    constructor(private readonly prisma: PrismaService) {}

    async createUser(user: CreateUserDto) {
        const { password, ...newUser } = user;
        const encryptedPassword = hashPassword(password);
        const createdUser = await this.prisma.user.create({ data: { password: encryptedPassword, ...newUser } });
        return createdUser;
    }

    async findUserByEmail(email: string) {
        const matchedUser = await this.prisma.user.findUnique({ where: { email } });
        return matchedUser;
    }


}

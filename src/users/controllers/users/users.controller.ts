import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {

    }

    @Post('create')
    async createUser(@Body() user: CreateUserDto) {
        const createdUser = await this.usersService.createUser(user);
        return createdUser;
    }

}

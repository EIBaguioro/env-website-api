import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { comparePassword } from 'src/utils/bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) {}

    async validateUser(email: string, submittedPassword: string) {

        const existingUser = await this.usersService.findUserByEmail(email);
        
        if(!existingUser) throw new Error("The email or password might be incorrect");


        const isPasswordCorrect = comparePassword(submittedPassword, existingUser.password);

        if(!isPasswordCorrect) return null;

        const { password:removedPassword, ...result} = existingUser;

        return result;
        
    }

    login(user: any) {
        const payload = { email: user.email, sub: user.userId };

        return {
            access_token: this.jwtService.sign(payload)
        }

    }
}

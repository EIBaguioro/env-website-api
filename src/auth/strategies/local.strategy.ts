import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../services/auth/auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    
    constructor(private readonly authService: AuthService) {
        super({
                usernameField: 'email',
                passwordField: 'password',
            })
    }

    async validate(email: string, password: string) {
        
        try {
            
            const user = await this.authService.validateUser(email, password);

            return user;

        }catch(error) {

            throw new HttpException(error.message, HttpStatus.FORBIDDEN);

        }

        
    }

}
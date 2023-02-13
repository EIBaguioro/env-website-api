import { Controller, Request, Post, UseGuards, Response, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';
import { AuthService } from 'src/auth/services/auth/auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req, @Response() res) {

        const { user, access_token } = this.authService.login(req.user);

        res.setHeader('Authorization', `Bearer ${access_token}`);

        res.status(HttpStatus.OK).json(user);

    }

}

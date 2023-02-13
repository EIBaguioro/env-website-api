import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { UsersService } from "src/users/services/users/users.service";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private userService: UsersService) {}

    async canActivate(context: ExecutionContext): Promise<boolean>  {
        const request = context.switchToHttp().getRequest();
        const userEmail = request.user.email;
        const user = await this.userService.findUserByEmail(userEmail);

        return user.isAdmin;
    }

}
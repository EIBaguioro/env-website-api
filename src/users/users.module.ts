import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { PrismaService } from "src/prisma/services/prisma/prisma.service";
import { UsersController } from "./controllers/users/users.controller";
import { UsersService } from "./services/users/users.service";

@Module({
    imports: [PrismaModule],
    controllers: [UsersController],
    providers: [UsersService, PrismaService],
    exports: [UsersService]
})

export class UsersModule {}
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamesModule = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const games_controller_1 = require("./games.controller");
const sync_controller_1 = require("../sync/sync.controller");
const games_service_1 = require("./games.service");
const jwt_strategy_1 = require("../strategies/jwt.strategy");
const prisma_service_1 = require("../prisma/prisma.service");
const roles_guard_1 = require("../guards/roles.guard");
let GamesModule = class GamesModule {
};
exports.GamesModule = GamesModule;
exports.GamesModule = GamesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.register({
                secret: process.env.JWT_SECRET || 'default-secret',
                signOptions: { expiresIn: '1d' },
            }),
        ],
        controllers: [games_controller_1.GamesController, games_controller_1.CategoriesController, games_controller_1.AdminController, sync_controller_1.SyncController],
        providers: [games_service_1.GamesService, jwt_strategy_1.JwtStrategy, prisma_service_1.PrismaService, roles_guard_1.RolesGuard],
        exports: [games_service_1.GamesService],
    })
], GamesModule);
//# sourceMappingURL=games.module.js.map
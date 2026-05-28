"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = exports.CategoriesController = exports.GamesController = void 0;
const common_1 = require("@nestjs/common");
const games_service_1 = require("./games.service");
const game_dto_1 = require("../dto/game.dto");
const jwt_auth_guard_1 = require("../guards/jwt-auth.guard");
const roles_guard_1 = require("../guards/roles.guard");
const swagger_1 = require("@nestjs/swagger");
let GamesController = class GamesController {
    gamesService;
    constructor(gamesService) {
        this.gamesService = gamesService;
    }
    findAll() {
        return this.gamesService.findAll();
    }
    findOne(id) {
        return this.gamesService.findOne(id);
    }
};
exports.GamesController = GamesController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all games' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of all games' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GamesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get game details by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Game details with run categories' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Game not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GamesController.prototype, "findOne", null);
exports.GamesController = GamesController = __decorate([
    (0, swagger_1.ApiTags)('games'),
    (0, common_1.Controller)('games'),
    __metadata("design:paramtypes", [games_service_1.GamesService])
], GamesController);
let CategoriesController = class CategoriesController {
    gamesService;
    constructor(gamesService) {
        this.gamesService = gamesService;
    }
    findOne(id) {
        return this.gamesService.findCategoryById(id);
    }
};
exports.CategoriesController = CategoriesController;
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get run category details by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Run category details' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Run category not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "findOne", null);
exports.CategoriesController = CategoriesController = __decorate([
    (0, swagger_1.ApiTags)('categories'),
    (0, common_1.Controller)('categories'),
    __metadata("design:paramtypes", [games_service_1.GamesService])
], CategoriesController);
let AdminController = class AdminController {
    gamesService;
    constructor(gamesService) {
        this.gamesService = gamesService;
    }
    createGame(dto) {
        return this.gamesService.createGame(dto);
    }
    updateGame(id, dto) {
        return this.gamesService.updateGame(id, dto);
    }
    deleteGame(id) {
        return this.gamesService.deleteGame(id);
    }
    createCategory(dto) {
        return this.gamesService.createCategory(dto);
    }
    updateCategory(id, dto) {
        return this.gamesService.updateCategory(id, dto);
    }
    deleteCategory(id) {
        return this.gamesService.deleteCategory(id);
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, common_1.Post)('games'),
    (0, common_1.SetMetadata)('roles', 'ADMIN'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new game (Admin only)' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Game created successfully' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Insufficient permissions' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [game_dto_1.CreateGameDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "createGame", null);
__decorate([
    (0, common_1.Patch)('games/:id/update'),
    (0, common_1.SetMetadata)('roles', 'ADMIN'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a game (Admin only)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Game updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Insufficient permissions' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Game not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, game_dto_1.UpdateGameDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "updateGame", null);
__decorate([
    (0, common_1.Delete)('games/:id/delete'),
    (0, common_1.SetMetadata)('roles', 'ADMIN'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a game (Admin only)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Game deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Insufficient permissions' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Game not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "deleteGame", null);
__decorate([
    (0, common_1.Post)('categories'),
    (0, common_1.SetMetadata)('roles', 'ADMIN'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new run category (Admin only)' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Run category created successfully' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Insufficient permissions' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Game not found' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [game_dto_1.CreateCategoryDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "createCategory", null);
__decorate([
    (0, common_1.Patch)('categories/:id/update'),
    (0, common_1.SetMetadata)('roles', 'ADMIN'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a run category (Admin only)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Run category updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Insufficient permissions' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Run category not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, game_dto_1.UpdateCategoryDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "updateCategory", null);
__decorate([
    (0, common_1.Delete)('categories/:id/delete'),
    (0, common_1.SetMetadata)('roles', 'ADMIN'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a run category (Admin only)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Run category deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Insufficient permissions' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Run category not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "deleteCategory", null);
exports.AdminController = AdminController = __decorate([
    (0, swagger_1.ApiTags)('admin'),
    (0, common_1.Controller)('admin'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [games_service_1.GamesService])
], AdminController);
//# sourceMappingURL=games.controller.js.map
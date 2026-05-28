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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let GamesService = class GamesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.games.findMany();
    }
    async findOne(id) {
        const game = await this.prisma.games.findUnique({
            where: { game_id: id },
            include: { run_categories: true },
        });
        if (!game)
            throw new common_1.NotFoundException('Game not found');
        return game;
    }
    async createGame(dto) {
        return this.prisma.games.create({
            data: { game_name: dto.game_name, description: dto.description },
        });
    }
    async updateGame(id, dto) {
        const game = await this.prisma.games.findUnique({ where: { game_id: id } });
        if (!game)
            throw new common_1.NotFoundException('Game not found');
        return this.prisma.games.update({
            where: { game_id: id },
            data: { game_name: dto.game_name, description: dto.description },
        });
    }
    async deleteGame(id) {
        const game = await this.prisma.games.findUnique({ where: { game_id: id } });
        if (!game)
            throw new common_1.NotFoundException('Game not found');
        await this.prisma.games.delete({ where: { game_id: id } });
        return { message: 'Game deleted successfully' };
    }
    async findCategoryById(id) {
        const category = await this.prisma.run_categories.findUnique({
            where: { run_category_id: id },
            include: { game: true },
        });
        if (!category)
            throw new common_1.NotFoundException('Run category not found');
        return category;
    }
    async createCategory(dto) {
        const game = await this.prisma.games.findUnique({ where: { game_id: dto.game_id } });
        if (!game)
            throw new common_1.NotFoundException('Game not found');
        return this.prisma.run_categories.create({
            data: { game_id: dto.game_id, run_category_name: dto.run_category_name },
        });
    }
    async updateCategory(id, dto) {
        const category = await this.prisma.run_categories.findUnique({
            where: { run_category_id: id },
        });
        if (!category)
            throw new common_1.NotFoundException('Run category not found');
        return this.prisma.run_categories.update({
            where: { run_category_id: id },
            data: { run_category_name: dto.run_category_name },
        });
    }
    async deleteCategory(id) {
        const category = await this.prisma.run_categories.findUnique({
            where: { run_category_id: id },
        });
        if (!category)
            throw new common_1.NotFoundException('Run category not found');
        await this.prisma.run_categories.delete({ where: { run_category_id: id } });
        return { message: 'Run category deleted successfully' };
    }
};
exports.GamesService = GamesService;
exports.GamesService = GamesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], GamesService);
//# sourceMappingURL=games.service.js.map
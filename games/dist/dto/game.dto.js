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
exports.UpdateCategoryDto = exports.CreateCategoryDto = exports.UpdateGameDto = exports.CreateGameDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateGameDto {
    game_name;
    description;
}
exports.CreateGameDto = CreateGameDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Super Mario 64', description: "Game's name" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateGameDto.prototype, "game_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'A classic 3D platformer game', description: "Game's description" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateGameDto.prototype, "description", void 0);
class UpdateGameDto {
    game_name;
    description;
}
exports.UpdateGameDto = UpdateGameDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Super Mario 64 DS', description: "Updated game's name" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateGameDto.prototype, "game_name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'An updated classic 3D platformer game', description: "Updated game's description" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateGameDto.prototype, "description", void 0);
class CreateCategoryDto {
    game_id;
    run_category_name;
}
exports.CreateCategoryDto = CreateCategoryDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'Game ID' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCategoryDto.prototype, "game_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Any%', description: 'Name of the speedrun category' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCategoryDto.prototype, "run_category_name", void 0);
class UpdateCategoryDto {
    run_category_name;
}
exports.UpdateCategoryDto = UpdateCategoryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated run category name' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCategoryDto.prototype, "run_category_name", void 0);
//# sourceMappingURL=game.dto.js.map
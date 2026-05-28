import { GamesService } from './games.service';
import { CreateGameDto, UpdateGameDto, CreateCategoryDto, UpdateCategoryDto } from '../dto/game.dto';
export declare class GamesController {
    private gamesService;
    constructor(gamesService: GamesService);
    findAll(): Promise<{
        description: string;
        game_name: string;
        game_id: string;
    }[]>;
    findOne(id: string): Promise<{
        run_categories: {
            game_id: string;
            run_category_name: string;
            run_category_id: string;
        }[];
    } & {
        description: string;
        game_name: string;
        game_id: string;
    }>;
}
export declare class CategoriesController {
    private gamesService;
    constructor(gamesService: GamesService);
    findOne(id: string): Promise<{
        game: {
            description: string;
            game_name: string;
            game_id: string;
        };
    } & {
        game_id: string;
        run_category_name: string;
        run_category_id: string;
    }>;
}
export declare class AdminController {
    private gamesService;
    constructor(gamesService: GamesService);
    createGame(dto: CreateGameDto): Promise<{
        description: string;
        game_name: string;
        game_id: string;
    }>;
    updateGame(id: string, dto: UpdateGameDto): Promise<{
        description: string;
        game_name: string;
        game_id: string;
    }>;
    deleteGame(id: string): Promise<{
        message: string;
    }>;
    createCategory(dto: CreateCategoryDto): Promise<{
        game_id: string;
        run_category_name: string;
        run_category_id: string;
    }>;
    updateCategory(id: string, dto: UpdateCategoryDto): Promise<{
        game_id: string;
        run_category_name: string;
        run_category_id: string;
    }>;
    deleteCategory(id: string): Promise<{
        message: string;
    }>;
}

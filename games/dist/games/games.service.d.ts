import { PrismaService } from '../prisma/prisma.service';
import { CreateGameDto, UpdateGameDto, CreateCategoryDto, UpdateCategoryDto } from '../dto/game.dto';
export declare class GamesService {
    private prisma;
    constructor(prisma: PrismaService);
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
    findCategoryById(id: string): Promise<{
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

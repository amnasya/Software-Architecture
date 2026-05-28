export declare class SyncController {
    constructor();
    syncCategory(body: {
        run_category_id: string;
        game_id: string;
        run_category_name: string;
        game_name: string;
    }): {
        status: string;
        data: {
            run_category_id: string;
            game_id: string;
            run_category_name: string;
            game_name: string;
        };
    };
    removeCategory(id: string): {
        status: string;
        run_category_id: string;
    };
}

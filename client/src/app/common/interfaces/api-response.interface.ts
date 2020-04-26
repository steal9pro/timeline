export interface ApiResponse<T> {
    success: boolean;
    data?: T | any;
    total?: number;
    error?: string;
    [key: string]: any;
}

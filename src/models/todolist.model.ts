export interface TodoListDto {
    id: number;
    title: string;
    description?: string;
    createdAt?: string;
}

export interface TodoListReqDto {
    title: string;
    description?: string;
}

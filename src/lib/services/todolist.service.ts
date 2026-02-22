import environment from '@/config/environment.config';
import { TodoListDto, TodoListReqDto } from '@/models/todolist.model';
import axios from 'axios';
import type { AxiosError } from 'axios';

const {
    api: {
        rest: {
            baseUrl,
            endpoints: { todolists: todolistsUrl },
        },
    },
} = environment;

const apiUrl = `${baseUrl}/${todolistsUrl}`;

export const getAllTodoLists = async (
    order?: 'asc' | 'desc',
): Promise<TodoListDto[]> => {
    return axios
        .get<TodoListDto[]>(`${apiUrl}`, { params: { order } })
        .then((res) => res.data)
        .catch((error) => {
            console.error('Erreur getAllTodoLists:', error);
            return [];
        });
};

export const getTodoLists = async (): Promise<TodoListDto[]> => {
    return axios
        .get<TodoListDto[]>(apiUrl)
        .then((res) => res.data)
        .catch((error) => {
            console.error('Erreur getTodoLists:', error);
            return [];
        });
};

export const getTodoListById = async (
    id: number,
): Promise<TodoListDto | null> =>
    axios
        .get<TodoListDto>(`${apiUrl}/${id}`)
        .then((res) => res.data)
        .catch((error: AxiosError) => {
            if (error?.response?.status === 404) {
                return null; // not found
            }
            const err = error?.response?.data || error.message;
            console.error('Erreur getTodoListById:', err);
            throw error;
        });

export const createTodoList = async (
    todoListData: TodoListReqDto,
): Promise<TodoListDto> =>
    axios
        .post<TodoListDto>(`${apiUrl}/create`, todoListData)
        .then((response) => {
            return response.data;
        })
        .catch((error: any) => {
            const err = error?.response?.data?.message || error.message;
            console.error('Erreur createTodoList:', err);
            throw new Error(err);
        });

export const updateTodoList = async (
    id: number,
    todoListData: Partial<TodoListReqDto>,
): Promise<TodoListDto> =>
    axios
        .put<TodoListDto>(`${apiUrl}/${id}`, todoListData)
        .then((res) => res.data)
        .catch((error: any) => {
            const err = error?.response?.data?.message || error.message;
            console.error('Erreur updateTodoList:', err);
            throw new Error(err);
        });

export const deleteTodoList = async (id: number): Promise<void> =>
    axios
        .delete<void>(`${apiUrl}/${id}`)
        .then((res) => res.data)
        .catch((error: any) => {
            const err = error?.response?.data?.message || error.message;
            console.error('Erreur deleteTodoList:', err);
            throw new Error(err);
        });
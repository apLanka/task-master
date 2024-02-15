// interface ITask {
//     id: string
//     title: string,
//     description: string,
//     isCompleted: boolean
// }

interface ITodoTask {
    taskId: string;
    taskTitle: string;
    isCompleted: boolean;
    taskDescription: string;
}

interface IUser {
    id: string;
    todoList: ITodoTask[];
}

interface IData {
    users: IUser[];
}

interface AppData {
    id: number,
    taskMaster: IData
}
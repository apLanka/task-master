import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Avatar, AvatarFallback} from "@/components/ui/avatar.tsx";
import TodoItem from "@/components/TodoItem.tsx";
import {ScrollArea} from "@/components/ui/scroll-area.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Plus} from "lucide-react";
import {useState} from "react";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {CheckedState} from "@radix-ui/react-checkbox";
import {PopoverClose} from "@radix-ui/react-popover";

const TodoPage = () => {
    const [taskTitle, setTaskTitle] = useState<string>('')
    const [taskDescription, setTaskDescription] = useState<string>('')
    const [todoList, setTodoList] = useState<ITask[]>([])

    const addTask = (): void => {
        if (taskTitle === '' || taskDescription === '') return
        const newTask: ITask = {
            id: generateRandomId(10),
            title: taskTitle,
            description: taskDescription,
            isCompleted: false
        }
        setTodoList([...todoList, newTask])
        console.log(todoList)
        setTaskTitle('')
        setTaskDescription('')
    }

    const completeTask = (id: string, isCompeted: CheckedState) => {
        console.log(id, isCompeted)
    }

    const deleteTask = (id: string) => {
        setTodoList(todoList.filter(value => value.id != id))
    }

    return (
        <div className='flex items-center justify-center min-h-[100vh]'>
            <Card className={'box-border h-[90vh] w-[60vh] p-4 border-4'}>
                <CardHeader>
                    <div className='flex justify-between mb-3'>
                        <CardTitle>Hey, Lanka</CardTitle>
                        <Avatar>
                            <AvatarFallback>PL</AvatarFallback>
                        </Avatar>
                    </div>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="outline"><Plus className='h-5 w-5 mr-2'/>Add</Button>
                        </PopoverTrigger><PopoverContent className="w-80">
                        <div className="grid gap-4">
                            <div className="space-y-2"><h4 className="font-medium leading-none">Add Task</h4>
                            </div>
                            <div className="grid gap-2">
                                <div className="grid grid-cols-3 items-center gap-4">
                                    <Label htmlFor="title">Title</Label><Input
                                    id="title"
                                    className="col-span-2 h-8"
                                    onChange={event => setTaskTitle(event.target.value)}
                                />
                                </div>
                                <div className="grid grid-cols-3 items-center gap-4">
                                    <Label htmlFor="description">Description</Label>
                                    <Input
                                        id="description"
                                        className="col-span-2 h-8"
                                        onChange={event => setTaskDescription(event.target.value)}
                                    />
                                </div>
                            </div>
                            <PopoverClose>
                                <div className='justify-self-end'>
                                    <Button className='w-36' onClick={addTask}> <Plus
                                        className='h-5 w-5 mr-2'/> Add</Button>
                                </div>
                            </PopoverClose>
                        </div>
                    </PopoverContent>
                    </Popover>
                </CardHeader>
                <CardContent>
                    <div>
                        <ScrollArea className="h-[68vh] rounded-md border w-full">
                            <div className="p-4">
                                {todoList.map((task: ITask, key: number) => {
                                    return <TodoItem task={task} key={key} completeTask={completeTask}
                                                     deleteTask={deleteTask}></TodoItem>
                                })}
                            </div>
                        </ScrollArea>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default TodoPage;

function generateRandomId(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
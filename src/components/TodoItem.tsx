import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Checkbox} from "@/components/ui/checkbox.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Trash2} from "lucide-react";
import {CheckedState} from "@radix-ui/react-checkbox";

interface Props {
    task: ITask,
    completeTask(id: string, isCompletes: CheckedState): void,
    deleteTask(id: string): void,
}

const TodoItem = ({task, completeTask, deleteTask}: Props) => {

    return (
        <div className='pt-3'>
            <Card>
                <CardHeader>
                    <div className='flex justify-between'>
                        <CardTitle>{task.title}</CardTitle>
                        <Checkbox onCheckedChange={checked => {
                            completeTask(task.id, checked)
                        }}/>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className='flex justify-between'>
                        <CardDescription>{task.description}</CardDescription>
                        <Button variant="outline" size="icon" onClick={() => {
                            deleteTask(task.id)
                        }}>
                            <Trash2 className="h-4 w-4"/>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default TodoItem;
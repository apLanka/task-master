import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import {Label} from "@/components/ui/label.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Input} from "@/components/ui/input.tsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

interface Props {
    onClickCreateNewAccount(): void
}

const SignIn = ({onClickCreateNewAccount}: Props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const signInUser = (): void => {
        console.log(email, password)
        navigate('todolist')
    }

    return (
        <Card className='w-[350px] mt-6' >
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Sign In an account</CardTitle>
                <CardDescription>
                    Enter your email below to create your account
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid grid-cols-2 gap-6">
                    <Button variant="outline">
                        {/*<Icons.gitHub className="mr-2 h-4 w-4" />*/}
                        {/*Github*/}
                    </Button>
                    <Button variant="outline">
                        {/*<Icons.google className="mr-2 h-4 w-4" />*/}
                        {/*Google*/}
                    </Button>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t"/>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
                    </div>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="m@example.com" onChange={event => {setEmail(event.target.value)}}/>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" onChange={event => {setPassword(event.target.value)}}/>
                </div>
            </CardContent>
            <CardFooter className='flex-col'>
                <Button className="w-full" onClick={signInUser}>Log In</Button>
                <Button variant="link" onClick={onClickCreateNewAccount}>Create New Account</Button>
            </CardFooter>
        </Card>
    );
};

export default SignIn;
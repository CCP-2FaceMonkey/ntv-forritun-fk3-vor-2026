import { useState } from "react";
import { Input } from "./Input";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./Button";

export function ShopCard() {
    const [myName, setMyName] = useState('Hjalti')
    const [email, setEmail] = useState('')
    const onClick = () => {
        alert(`Submitted name: ${myName} and email: ${email}`)
    }
    return (
        <Card>
            <CardHeader>
                <CardTitle>Shopping card</CardTitle>
                <CardDescription>No dart here</CardDescription>
                <CardAction>
                    <Button onClick={onClick} value="foo" />
                </CardAction>
            </CardHeader>
            <CardContent>
                <Input value={myName} onChange={(e) => setMyName(e.target.value)} />
                <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>

        </Card>
    );
}
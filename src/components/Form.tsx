import { useState } from "react";
import { Input } from "./Input";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSet } from "./ui/field";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "./ui/select";
import { Button } from "./Button";

export function Form() {
    const [myName, setMyName] = useState("Hjalti");
    const [selectedFruit, setSelectedFruit] = useState('')
    return (
        <Card>
            <CardHeader>
                <CardTitle>Form</CardTitle>
            </CardHeader>
            <div className="w-full max-w-md">
                <form onSubmit={(e) => {
                    e.preventDefault()
                    window.alert(`${myName} just placed an order for ${selectedFruit}`)
                }}>
                    <FieldSet>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="name">Full name</FieldLabel>
                                <Input
                                    id="name"
                                    autoComplete="off"
                                    placeholder="Evil Rabbit"
                                    onChange={(e) => {
                                        setMyName(e.target.value);
                                    }}
                                />
                                <FieldDescription>
                                    This appears on invoices and emails.
                                </FieldDescription>
                            </Field>
                        </FieldGroup>
                    </FieldSet>
                    <FieldSet>
                        <FieldGroup>
                            <Select onValueChange={(e) => {
                                setSelectedFruit(e)
                            }}>
                                <SelectTrigger className="w-full max-w-48">
                                    <SelectValue placeholder="Select a fruit" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Fruits</SelectLabel>
                                        <SelectItem value="apple">Apple</SelectItem>
                                        <SelectItem value="banana">Banana</SelectItem>
                                        <SelectItem value="blueberry">Blueberry</SelectItem>
                                        <SelectItem value="grapes">Grapes</SelectItem>
                                        <SelectItem value="pineapple">Pineapple</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </FieldGroup>
                    </FieldSet>
                    <Button type="submit" />
                </form>
            </div>
        </Card>
    );
}
{
    /* <Card>
              <CardHeader>
                  <CardTitle>Form</CardTitle>
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
          </Card> */
}

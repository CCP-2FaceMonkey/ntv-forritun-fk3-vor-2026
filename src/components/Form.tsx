import { useRef, useState } from "react";
import { Input } from "./Input";
import { Card, CardHeader, CardTitle } from "./ui/card";
import {
    Field,
    FieldGroup,
    FieldSet,
} from "./ui/field";
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
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

type Foo = {
    bar: {
        name: string
    }
}

type DataType = {
    firstName: string
    lastName: string
    email: string
    mobileNumber: string
}
export function Form({ bar }: Foo) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [selectedFruit, setSelectedFruit] = useState("");
    const [radioButton, setRadioButton] = useState<string | null>(null);
    const firstNameRef = useRef('')


    const dataRef = useRef<DataType>({
        email: '',
        firstName: '',
        lastName: '',
        mobileNumber: ''
    })


    const onSubmit = () => {
        const { firstName } = dataRef.current
        window.alert(`Hello ${firstName}`)
    }
    console.log('render')

    return (
        <div>
            <p>FirstNameValue: </p>
            <Card className="w-3/4 max-w-7xl bg-blue-950">
                <CardHeader>
                    <div className="flex items-center gap-2">
                        <div className="grow border h-0"></div>
                        <CardTitle className="text-white">Example</CardTitle>
                        <div className="grow border h-0"></div>
                    </div>
                </CardHeader>
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        onSubmit()
                    }}
                    className="w-full"
                >
                    <FieldSet>
                        <FieldGroup>
                            <Field>
                                <Input
                                    className="bg-white"
                                    id="firstName"
                                    autoComplete="off"
                                    placeholder="Gunnsteinn"
                                    onChange={(e) => {
                                        firstNameRef.current = e.target.value;
                                    }}
                                />
                            </Field>
                            <Field>
                                <Input
                                    className="bg-white"
                                    id="lastName"
                                    autoComplete="off"
                                    placeholder="Skulason"
                                    onChange={(e) => {
                                        dataRef.current = ({
                                            ...dataRef.current,
                                            lastName: e.target.value

                                        });
                                    }}
                                />
                            </Field>
                            <Field>
                                <Input
                                    className="bg-white"
                                    id="email"
                                    autoComplete="off"
                                    type="email"
                                    placeholder="asdf@ntv.is"
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                />
                            </Field>
                            <Field>
                                <Input
                                    className="bg-white"
                                    id="mobileNumber"
                                    autoComplete="off"
                                    type="number"
                                    placeholder="Mobile number"
                                    onChange={(e) => {
                                        setMobileNumber(e.target.value);
                                    }}
                                />
                            </Field>
                        </FieldGroup>
                        <FieldGroup>
                            <Select
                                onValueChange={(e) => {
                                    setSelectedFruit(e);
                                }}
                            >
                                <SelectTrigger className="w-full bg-white" >
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
                        <FieldGroup>
                            <RadioGroup defaultValue="comfortable" className="w-fit flex" onValueChange={(e) => {
                                setRadioButton(e)
                            }}>
                                <RadioGroupItem className="bg-white" value="yes" id="yes" onChange={(e) => {
                                    console.log(e)
                                }} />
                                <Label className="text-white" htmlFor="yes">Yes</Label>
                                <RadioGroupItem className="bg-white" value="no" id="no" />
                                <Label className="text-white" htmlFor="no">No</Label>
                            </RadioGroup>
                        </FieldGroup>
                    </FieldSet>
                    <div className="flex flex-col py-4 gap-4">
                        <Button type="submit" className="bg-pink-500 p-4 rounded text-white uppercase" />
                        <div className="flex items-center gap-2">
                            <div className="grow border h-0"></div>
                            <CardTitle className="text-white">or</CardTitle>
                            <div className="grow border h-0"></div>
                        </div>
                        <Button value="edit" type="submit" className="bg-black p-4 rounded text-white uppercase border-pink-500 border" />
                    </div>
                </form>
            </Card>
        </div>);
}
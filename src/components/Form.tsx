import { useEffect, useState } from "react";
import { Input } from "./Input";
import { Card, CardHeader, CardTitle } from "./ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
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

export function Form() {
  const [myFirstName, setMyFirstName] = useState("");
  const [myLastName, setMyLastName] = useState("");
  const [myEmail, setMyEmail] = useState("");
  const [myPhone, setMyPhone] = useState("");
  const [bag, setBag] = useState<string | undefined>(
    undefined
  );
  const [selectedFruit, setSelectedFruit] = useState("");

  useEffect(() => {
    if (bag !=null) {
        console.log(setBag);
    }
  },[bag])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Form</CardTitle>
      </CardHeader>
      <div className="w-full max-w-md">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.alert(
              `${myFirstName} ${myLastName} ${myEmail} ${myPhone} just placed an order for ${selectedFruit}. Bag: ${bag}`,
            );
            console.log(
              myFirstName,
              myLastName,
              myEmail,
              myPhone,
              selectedFruit,
            );
          }}
        >
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="firstName">First name</FieldLabel>
                <Input
                  id="firstName"
                  autoComplete="off"
                  placeholder="Evil"
                  value={myFirstName}
                  onChange={(e) => {
                    setMyFirstName(e.target.value);
                  }}
                />
                <FieldLabel htmlFor="lastName">Last name</FieldLabel>
                <Input
                  id="lastName"
                  autoComplete="off"
                  placeholder="Rabbit"
                  onChange={(e) => {
                    setMyLastName(e.target.value);
                  }}
                />
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  autoComplete="off"
                  placeholder="Evil@Rabbit.com"
                  onChange={(e) => {
                    setMyEmail(e.target.value);
                  }}
                />
                <FieldLabel htmlFor="Phone">Mobile number</FieldLabel>
                <Input
                  id="phone"
                  type="number"
                  autoComplete="off"
                  placeholder="5812345"
                  onChange={(e) => {
                    setMyPhone(e.target.value);
                  }}
                />
                <FieldLabel htmlFor="Bag">
                  Would you like a bag with the order?
                </FieldLabel>
                <RadioGroup value={bag} onValueChange={setBag}>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="yes" id="option-yes" />
                    <Label htmlFor="option-yes">Yes</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="no" id="option-no" />
                    <Label htmlFor="option-no">No</Label>
                  </div>
                </RadioGroup>

                <FieldDescription>
                  This appears on invoices and emails.
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSet>
            <FieldGroup>
              <Select
                onValueChange={(e) => {
                  setSelectedFruit(e);
                }}
              >
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

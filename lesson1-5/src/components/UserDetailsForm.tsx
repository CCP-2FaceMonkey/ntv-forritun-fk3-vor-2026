import { Card, CardHeader, CardTitle } from './ui/card';
import { Button } from './Button';
import { FieldGroup, FieldSet } from './ui/field';
import { RadioGroup } from './ui/radio-group';
import { Label } from './ui/label';
import { RadioGroupItem } from './ui/radio-group';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { InputField } from './Field/InputField';
import useDebounce from '@/hooks/useDebounce';

export type FormValuesType = {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  selectedFruit: string;
  radioButton: string | null;
};

function UserDetailsForm({
  values,
  setValues,
}: {
  values: FormValuesType;
  setValues: (values: FormValuesType) => void;
}) {
  const debouncedValue = useDebounce(values.email, 1000);

  const onSubmit = () => {
    localStorage.setItem(debouncedValue, JSON.stringify(values));
  };

  return (
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
          e.preventDefault();
          onSubmit();
        }}
        className="w-full"
      >
        <FieldSet>
          <FieldGroup>
            <InputField
              className="bg-white"
              id="firstName"
              placeholder="First Name"
              // TODO: Set values to all input fields in the form
              value={values.firstName}
              onChange={(e) => {
                setValues({ ...values, firstName: e.target.value });
              }}
            />
            <InputField
              className="bg-white"
              id="lastName"
              placeholder="Last Name"
              value={values.lastName}
              onChange={(e) => {
                setValues({ ...values, lastName: e.target.value });
              }}
            />
            <InputField
              className="bg-white"
              id="email"
              placeholder="Email"
              value={values.email}
              onChange={(e) => {
                setValues({ ...values, email: e.target.value });
              }}
            />
            <InputField
              className="bg-white"
              id="mobileNumber"
              placeholder="Mobile number"
              value={values.mobileNumber}
              onChange={(e) => {
                setValues({ ...values, mobileNumber: e.target.value });
              }}
            />
          </FieldGroup>
          <FieldGroup>
            <Select
              onValueChange={(e) => {
                setValues({ ...values, selectedFruit: e });
              }}
            >
              <SelectTrigger className="w-full bg-white">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <Label>Fruits</Label>
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
            <RadioGroup
              defaultValue="comfortable"
              className="w-fit flex"
              onValueChange={(e) => {
                setValues({ ...values, radioButton: e });
              }}
            >
              <RadioGroupItem className="bg-white" value="yes" id="yes" />
              <Label className="text-white" htmlFor="yes">
                Yes
              </Label>
              <RadioGroupItem className="bg-white" value="no" id="no" />
              <Label className="text-white" htmlFor="no">
                No
              </Label>
            </RadioGroup>
          </FieldGroup>
        </FieldSet>
        <div className="flex flex-col py-4 gap-4">
          <Button
            type="submit"
            className="bg-pink-500 p-4 rounded text-white uppercase"
          />
          <div className="flex items-center gap-2">
            <div className="grow border h-0"></div>
            <CardTitle className="text-white">or</CardTitle>
            <div className="grow border h-0"></div>
          </div>
          <Button
            value="edit"
            type="submit"
            className="bg-black p-4 rounded text-white uppercase border-pink-500 border"
          />
        </div>
      </form>
    </Card>
  );
}

export default UserDetailsForm;

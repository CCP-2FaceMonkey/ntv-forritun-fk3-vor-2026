import { useRef } from 'react';
import { Button } from './Button';
import { Card, CardHeader, CardTitle } from './ui/card';
import { Field, FieldGroup, FieldSet } from './ui/field';
import { Input } from './Input';

type LoadCardProps = {
  initializeForm: (edit: boolean) => void;
  setEmail: (email: string) => void;
};
export function LoadCard({ initializeForm, setEmail }: LoadCardProps) {
  const loadEmailRef = useRef<HTMLInputElement>(null);

  return (
    <Card className="my-4 max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="grow border h-0"></div>
          <CardTitle>Already filled out form?</CardTitle>
          <div className="grow border h-0"></div>
        </div>
      </CardHeader>
      <FieldSet>
        <FieldGroup>
          <Field>
            <Input
              className="bg-white"
              id="email"
              autoComplete="off"
              type="email"
              ref={loadEmailRef}
              placeholder="asdf@ntv.is"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Field>
        </FieldGroup>
      </FieldSet>
      <div className="flex flex-col py-4 gap-4">
        <Button
          value="load"
          type="submit"
          onClick={() => {
            initializeForm(true);
          }}
          className="bg-green-500 p-4 rounded text-white uppercase"
        />
        <Button
          value="create new"
          type="submit"
          onClick={() => {
            initializeForm(false);
          }}
          className="bg-green-500 p-4 rounded text-white uppercase"
        />
      </div>
    </Card>
  );
}

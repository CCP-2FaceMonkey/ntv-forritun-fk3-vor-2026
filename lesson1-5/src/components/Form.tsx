import { useCallback, useEffect, useState } from 'react';

import useDebounce from '@/hooks/useDebounce';
import { LoadCard } from './LoadCard';
import UserDetailsForm, { type FormValuesType } from './UserDetailsForm';

export function Form() {
  const [email, setEmail] = useState('');
  const [displayForm, setDisplayForm] = useState(false);
  const [values, setValues] = useState<FormValuesType>({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    selectedFruit: '',
    radioButton: null,
  });

  const debouncedSearchTerm = useDebounce(email, 1000);

  useEffect(() => {
    localStorage.setItem(debouncedSearchTerm, JSON.stringify(values));
  }, [debouncedSearchTerm, values]);

  const getUserDetails = useCallback(() => {
    const localStorageValue = localStorage.getItem(email);
    if (localStorageValue) {
      const parsedLocalStorageValue: FormValuesType =
        JSON.parse(localStorageValue);
      return parsedLocalStorageValue;
    }
    return null;
  }, [email]);

  const initializeForm = (edit: boolean) => {
    if (!email) {
      window.alert('Please enter an email address');
      return;
    }
    if (edit) {
      const userDetails = getUserDetails();
      if (userDetails) {
        setValues(userDetails);
      }
      return;
    }

    setDisplayForm(true);
    setValues({
      firstName: '',
      lastName: '',
      email: email,
      mobileNumber: '',
      selectedFruit: '',
      radioButton: null,
    });
  };

  return (
    <div className="w-full justify-center">
      {displayForm ? (
        <UserDetailsForm values={values} setValues={setValues} />
      ) : (
        <LoadCard
          initializeForm={() => initializeForm(false)}
          setEmail={setEmail}
        />
      )}
    </div>
  );
}

import React from "react";
import { FormField, FormLabel, FormControl, FormMessage } from "./ui/form";
import { Input } from "./ui/input";

interface CustomInputProps {
  form: any;
  name: 'email' | 'password' | 'name' | 'firstName' | 'lastName' | 'address1' | 'city' | 'state' | 'postalCode' | 'dateOfBirth' | 'ssn';
  label: string;
  placeholder: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  form,
  name,
  label,
  placeholder,
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }: { field: any }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                {...field}
                className="input-class"
                type={name === 'password' ? 'password' : 'text'}
                value={field.value || ''}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
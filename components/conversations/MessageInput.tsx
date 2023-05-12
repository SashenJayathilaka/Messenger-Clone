"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
  placeholder?: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
};

function MessageInput({
  placeholder,
  id,
  type,
  required,
  register,
  errors,
}: Props) {
  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        autoComplete={id}
        {...register(id, { required })}
        placeholder={placeholder}
        className="text-black dark:text-white font-light py-2 px-4 bg-neutral-100 dark:bg-neutral-900 w-full rounded-full focus:outline-none"
      />
    </div>
  );
}

export default MessageInput;

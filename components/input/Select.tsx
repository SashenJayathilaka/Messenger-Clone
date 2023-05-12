"use client";

import ReactSelect, { StylesConfig } from "react-select";

type Props = {
  label: string;
  value?: Record<string, any>;
  onChange: (value: Record<string, any>) => void;
  options: Record<string, any>[];
  disabled?: boolean;
};

function Select({ label, value, options, disabled, onChange }: Props) {
  const colorStyles: StylesConfig = {
    option: (styles) => ({
      ...styles,
      color: "#000",
      cursor: "pointer",
    }),
    singleValue: (styles) => ({
      ...styles,
      color: "#000",
      cursor: "pointer",
    }),
    menuPortal: (base) => ({ ...base, zIndex: 9999 }),
  };

  return (
    <div className="z-[100]">
      <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
        {label}
      </label>
      <div className="mt-2">
        <ReactSelect
          isDisabled={disabled}
          value={value}
          onChange={onChange}
          isMulti
          options={options}
          menuPortalTarget={document.body}
          styles={colorStyles}
          classNames={{
            control: () => "text-sm",
          }}
        />
      </div>
    </div>
  );
}

export default Select;

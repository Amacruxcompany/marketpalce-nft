import React, { useState } from 'react';
import Select from './Select';

type Type = 'input' | 'textarea' | 'select';
type HTMLInputTypeAttribute =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week'
  | (string & {});

interface Props {
  label?: string;
  type?: Type;
  inputType?: HTMLInputTypeAttribute;
  inputName?: string;
  selectOptions?: any[];
  placeholder?: string;
  value?: string;
  subLabel?: string;
}

const InputField: React.FC<Props> = ({
  inputType,
  label,
  type,
  inputName,
  selectOptions,
  placeholder,
  value,
  subLabel,
}) => {
  const [selected, setSelected] = useState(
    selectOptions ? selectOptions[0] : null
  );
  const classes =
    'bg-transparent-custom rounded-lg shadow-lg border-none active:outline-none focus:outline-none px-3 py-2';

  return (
    <div>
      <div className='flex flex-col'>
        {label && <label className='font-bold mb-1 uppercase'>{label}</label>}
        {subLabel && (
          <span className='text-xs text-blue-600/95 mb-1 text-violet'>
            {subLabel}
          </span>
        )}
        {type === 'input' && (
          <input
            placeholder={placeholder}
            className={classes}
            type={inputType}
            name={inputName}
            value={value}
          />
        )}
        {type === 'textarea' && (
          <textarea
            className={classes}
            style={{ resize: 'none' }}
            rows={5}
            name={inputName}
            placeholder={placeholder}
          />
        )}
        {type === 'select' && selectOptions && (
          <Select
            selected={selected}
            setSelected={setSelected}
            options={selectOptions}
          />
        )}
      </div>
    </div>
  );
};

export default InputField;

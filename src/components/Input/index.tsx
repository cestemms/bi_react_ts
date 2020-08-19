import React, { InputHTMLAttributes } from 'react';
import { InputElement } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type:string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({type, placeholder, ...rest}) => {
  return (
      <InputElement 
      type={type}
      placeholder={placeholder}
       {...rest}/>
  );
}

export default Input;
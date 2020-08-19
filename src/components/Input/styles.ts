import styled from "styled-components";

export const InputElement = styled.input`
  
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  border-radius: 0.375rem;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;

  :not(textarea) {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 3px var(--shadow);
  }
`;


import { useState } from 'react';

const useToggle = (defValue) => {
  const [show, setShow] = useState(defValue);
  const toggle = () => {
    setShow(!show);
  };
  return { show, toggle };
};

export default useToggle;

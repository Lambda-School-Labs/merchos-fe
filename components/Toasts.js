import React from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';

const ToastList = styled.ul`
  position: fixed;
  left: 150px;
  bottom: 10px;
  font-size: 2rem;

  li {
    transition: 0.2s;
    background: gray;
    padding: 10px 20px;
    margin: 20px 0px;
    border-radius: 5px;
  }
`;

const Toasts = () => {
  const toasts = useSelector((state) => state.toastController.toasts);
  if (toasts.length > 0) {
    return (
      <ToastList>
        {toasts.length > 0 &&
          toasts.map((toast) => (
            <li key={toast.id}>
              <p>{toast.message}</p>
            </li>
          ))}
      </ToastList>
    );
  } else {
    return null;
  }
};

export default Toasts;

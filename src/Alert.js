import React, { useEffect, useCallback } from 'react';

const Alert = ({ type, msg, removeAlert }) => {
  useEffect(
    useCallback(() => {
      const timeout = setTimeout(() => {
        removeAlert();
      }, 3000);
      return () => clearTimeout(timeout);
    }, [removeAlert])
  );

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;

import React from 'react';
import PropTypes from 'prop-types';

const NO_PROVIDER = '_NP_';

const createContext = (initialStateOrHook) => {
  const Context = React.createContext(NO_PROVIDER);

  const useContext = () => {
    const result = React.useContext(Context);
    return result;
  };

  const Provider = ({ children, ...props }) => {
    const state = typeof initialStateOrHook === 'function' ? initialStateOrHook(props) : initialStateOrHook;

    return <Context.Provider value={state}>{children}</Context.Provider>;
  };
  Provider.propTypes = { children: PropTypes.node.isRequired };

  return [Provider, useContext];
};

export { createContext };

import { createContext, useContext } from 'react'
import Store from './store';

export default class RootStore {
  constructor () {
    this.Store = new Store();
  }
}

const rootStoreContext = createContext();

export const RootStoreProvider = ({ store, children }) => {
  return (
    <rootStoreContext.Provider value={store}>
      {children}
    </rootStoreContext.Provider>
  )
}

export const useRootStore = () => useContext(rootStoreContext)
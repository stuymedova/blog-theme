import { useRouter } from 'next/router';
import { createContext, useContext, useState, useCallback, useEffect } from 'react';

export const HistoryContext = createContext();
export const useHistoryContext = () => useContext(HistoryContext);

export const usePrevPath = () => {
  const pathname = useRouter().asPath;
  const [history, setHistory] = useState([pathname]);

  const prevPathIndex = history.length - 2;
  const prevPath = history[prevPathIndex > 0 ? prevPathIndex : 0];

  const removeHistoryItem = useCallback(
    (prevHistory, item) => prevHistory.filter((_, index) => index !== item),
    []
  );

  const removeHistory = () => {
    setHistory((prevHistory) =>
      prevHistory.length > 1
        ? removeHistoryItem(prevHistory, prevHistory.length - 1)
        : prevHistory
    );
  };

  useEffect(() => {
    setHistory((prevHistory) =>
      prevHistory[prevHistory.length - 1] !== pathname
        ? [
          ...(prevHistory.length > 1
            ? removeHistoryItem(prevHistory, 0)
            : prevHistory),
          pathname,
        ]
        : prevHistory
    );
  }, [pathname]);

  return { history, prevPath, removeHistory };
};

export const HistoryProvider = ({ children }) => {
  const historyProps = usePrevPath();

  return (
    <HistoryContext.Provider value={{...historyProps}}>
      {children}
    </HistoryContext.Provider>
  );
};

export default HistoryProvider;
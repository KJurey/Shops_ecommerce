import { createContext, useEffect, useState, useCallback, useMemo } from "react";

export const ItemsContext = createContext();

export const ItemsContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const items = await fetch('https://fakestoreapi.com/products');
      const result = await items.json();

      if (result) {
        setItems(result);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <ItemsContext.Provider value={{ items, loading, error, fetchData }}>
      {children}
    </ItemsContext.Provider>
  );
};
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

const GET_URL =
  "https://lza4vi7uuvokxmbo5kmt4ou7i40nzhbg.lambda-url.us-east-1.on.aws/";

// eslint-disable-next-line react/prop-types
const DataProvider = ({ children }) => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(GET_URL);
      const data = await response.json();

      setProducts(data);
    };

    fetchData();
  }, []);

  return <DataContext.Provider value={{products}}>{children}</DataContext.Provider>;
};


export default DataProvider
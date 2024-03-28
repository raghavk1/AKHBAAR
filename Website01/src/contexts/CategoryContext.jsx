import React, { createContext, useContext, useState } from 'react';

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const initialCategories = ["Sports", "Education", "Business", "Technology", "Science", "Health", "Entertainment", "General"];
  const [categories, setCategories] = useState(initialCategories);

  return (
    <CategoryContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCountryContext = () => useContext(CategoryContext);

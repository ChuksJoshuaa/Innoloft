import { IIProps } from "../interface";

export const checkLocal = (val: IIProps) => {
  const value = getFromLocalStorage().data;
  let obj = {} as IIProps;
  if (value) {
    obj = value as IIProps;
  } else {
    saveToLocalStorage(val);
    obj = val;
  }

  return obj;
};

export const saveToLocalStorage = (data: IIProps) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("products", JSON.stringify({ data }));
  }
};

export const getFromLocalStorage = () => {
  let products = {
    data: {},
  };
  if (typeof window !== "undefined") {
    products = JSON.parse(localStorage.getItem("products") || "{}");
  }
  return products;
};

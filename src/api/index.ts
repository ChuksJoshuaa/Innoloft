import { ConfigProps, FetchProps, IIProps, TrlProps } from "../interface";
import { useState, useEffect } from "react";
import axios from "axios";
import { LIVE_BASE_URL } from "../actionTypes";
import { setUserProfile } from "../redux/features/products/productSlice";
import { useAppDispatch } from "../redux/hooks";
import { ConfigRawData, ProductRawData, TrlRawData } from "../utils/data";

const useFetch = (endpoint: FetchProps["endpoint"], key: FetchProps["key"]) => {
  const [isConfigLoading, setIsConfigLoading] = useState(false);
  const [isConfigError, setIsConfigError] = useState(false);
  const [configObj, setConfigObj] = useState({} as ConfigProps);
  const [isTrlLoading, setIsTrlLoading] = useState(false);
  const [isTrlError, setIsTrlError] = useState(false);
  const [trlData, setTrlData] = useState([] as TrlProps[]);
  const [isProductLoading, setIsProductLoading] = useState(false);
  const [isProductError, setIsProductError] = useState(false);
  const [productData, setProductData] = useState({} as IIProps);
  const dispatch = useAppDispatch();

  const fetchConfiguration = async (): Promise<void> => {
    setIsConfigLoading(true);
    try {
      const response = await axios.get(`${LIVE_BASE_URL}/${endpoint}/${key}`);
      let data = response.data;
      setConfigObj(data);
    } catch (error) {
      setConfigObj(ConfigRawData);
      console.log(error);
      setIsConfigError(true);
    } finally {
      setIsConfigLoading(false);
    }
  };

  const fetchTrl = async (): Promise<void> => {
    setIsTrlLoading(true);
    try {
      const response = await axios.get(`${LIVE_BASE_URL}/${endpoint}/${key}`);
      let data = response.data;
      setTrlData(data);
    } catch (error) {
      setTrlData(TrlRawData);
      console.log(error);
      setIsTrlError(true);
    } finally {
      setIsTrlLoading(false);
    }
  };

  const fetchProduct = async (): Promise<void> => {
    setIsProductLoading(true);
    try {
      const response = await axios.get(`${LIVE_BASE_URL}/${endpoint}/${key}`);
      let data = response.data;
      setProductData(data);
      dispatch(setUserProfile(data.user));
    } catch (error) {
      setProductData(ProductRawData);
      console.log(error);
      setIsProductError(true);
    } finally {
      setIsProductLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
    fetchConfiguration();
    fetchTrl();
  }, []);
  return {
    isConfigLoading,
    isConfigError,
    configObj,
    isTrlError,
    isTrlLoading,
    trlData,
    productData,
    isProductLoading,
    isProductError,
  };
};

export default useFetch;

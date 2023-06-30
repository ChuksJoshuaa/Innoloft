import { ConfigProps, FetchProps, TrlProps } from "../interface";
import { useState, useEffect } from "react";
import axios from "axios";
import { LIVE_BASE_URL } from "../actionTypes";

const useFetch = (endpoint: FetchProps["endpoint"], key: FetchProps["key"]) => {
  const [isConfigLoading, setIsConfigLoading] = useState(false);
  const [isConfigError, setIsConfigError] = useState(false);
  const [configObj, setConfigObj] = useState({} as ConfigProps);
  const [isTrlLoading, setIsTrlLoading] = useState(false);
  const [isTrlError, setIsTrlError] = useState(false);
  const [trlData, setTrlData] = useState([] as TrlProps[]);

  const fetchConfiguration = async (): Promise<void> => {
    setIsConfigLoading(true);
    try {
      const response = await axios.get(`${LIVE_BASE_URL}/${endpoint}/${key}`);
      let data = response.data;
      setConfigObj(data);
    } catch (error) {
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
      console.log(error);
      setIsTrlError(true);
    } finally {
      setIsTrlLoading(false);
    }
  };

  useEffect(() => {
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
  };
};

export default useFetch;

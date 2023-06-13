const useStorage = () => {
  const storageType = (type) => `${type ? "local" : "session"}Storage`;
  const isBrowser = (() => typeof window !== "undefined")();

  const getItem = (key, type) => {
    //   const storageType = `${type ?? 'session'}Storage`;
    return isBrowser ? window[storageType(type)][key] : "";
  };

  const setItem = (key, value, type) => {
    if (isBrowser) {
      window[storageType(type)].setItem(key, value);
      return true;
    }

    return false;
  };

  const removeItem = (key, type) => {
    window[storageType(type)].removeItem(key);
  };

  return {
    getItem,
    setItem,
    removeItem,
  };
};

export default useStorage;

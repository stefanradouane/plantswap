const useXML = () => {
  const isBrowser = (() => typeof window !== "undefined")();

  const newXML = () => {
    //   const storageType = `${type ?? 'session'}Storage`;
    return isBrowser ? new XMLHttpRequest() : "";
  };

  return {
    newXML,
  };
};
export default useXML;

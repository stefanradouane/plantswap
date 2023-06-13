function isJSON(jsonString) {
  try {
    var o = JSON.parse(jsonString);
    if (o && typeof o === "object") {
      return o;
    }
  } catch (e) {
    console.log("not valid json");
  }

  return false;
}

export default isJSON;

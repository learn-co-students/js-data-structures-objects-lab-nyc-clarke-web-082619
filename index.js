// Write your solution in this file!
  let driver = {};
  function updateDriverWithKeyAndValue(driver, key, value){
    return Object.assign({}, driver, {[key]: value});
  };
  function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
     obj[key] = value;
     return obj
  };
  function deleteFromDriverByKey(driver, key){
      let newObj = Object.assign({}, driver, key);
      delete newObj[key];
      return newObj;
  };
  function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key];
    return driver;
  };
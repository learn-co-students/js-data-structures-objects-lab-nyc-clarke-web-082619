const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  // Alternate using ES6 Spread operators:
  // return { ...driver, ...{ [key]: value } }
  return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  const driverCopy = Object.assign({}, driver);
  delete driverCopy[key];

  return driverCopy;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];

  return driver;
}

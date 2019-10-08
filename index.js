// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
    let obj = Object.assign({}, driver);
    obj[key] = value;
    return obj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key){
    let obj = Object.assign({},driver);
    delete obj[key];
    return obj;
}

function destructivelyDeleteFromDriverByKey(driver,key){
    delete driver[key];
    return driver;
}
// 객체타입인지 확인
const isObject = obj => typeof obj === 'object' && obj.constructor === Object;
// 빈 객체인지 확인
const isEmpty = obj => Object.keys(obj).length === 0;
const isEmptyObject = obj => isObject(obj) && isEmpty(obj);

module.exports = isEmptyObject;
// export default isEmptyObject;

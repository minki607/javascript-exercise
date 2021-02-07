
const isDuplicateId = (id, array) => array.find(item => item.id === +id);

module.exports = isDuplicateId;
// export default isDuplicateId;
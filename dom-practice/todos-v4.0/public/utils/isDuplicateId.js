const isDuplicateId = (id, array) => array.find(item => item.id === +id);

export default isDuplicateId;
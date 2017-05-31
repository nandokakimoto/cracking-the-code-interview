module.exports = function(head) {
  var dataMap = {};

  if(head === null) {
    return null;
  }

  dataMap[head.data] = true;

  while(head.next !== null) {
    var data = head.next.data;

    if(dataMap[data] === true) {
      head.next = head.next.next;
    } else {
      dataMap[data] = true;
      head = head.next;
    }
  }
};

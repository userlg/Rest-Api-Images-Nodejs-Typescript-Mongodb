//------> This file contains all functions extras to this project

function generateDate(){

  var date = new Date();

  var updated = date.getDate().toString() + '/' + (date.getMonth() + 1).toString() + '/' + date.getFullYear().toString() + '--' + date.getHours().toString() + ':' + date.getMinutes().toString() + ':' + date.getSeconds().toString();
  //console.log(typeof(updated));

  return updated;
}

export default generateDate;
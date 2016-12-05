// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  // your code here
  node = node || document.body;
  var result = [];
  var splitClass = node.className.split(' ');

  if(splitClass.indexOf(className) > -1) {
  	result.push(node);
  }

  for(var i = 0; i < node.children.length; i++) {
  	var getChildResults = getElementsByClassName(className, node.children[i]);
  	result = result.concat(getChildResults);
  }

  return result;
};

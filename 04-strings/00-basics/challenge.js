module.exports.formLetter = function(firstName, senderName, message) {
	return "Hello " + firstName + ",\n\n" + message + "\n\nSincerely,\n" + senderName;

};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
	sliceItAndCombineIt.bigString("This is a Test".substring (0, 4, 5, 7));
	sliceItAndCombineIt.startA("This is a Test", 0, 1, 4, 6);
	sliceItAndCombineIt("This is a Test", 8);
	sliceItAndCombineIt("This is a Test", 0, 14);
	sliceItAndCombineIt("This is a Test", 14);
};

module.exports.findFirstMatch = function(text, searchString) {
	'Roses are red'.indexOf('Red')

};

module.exports.findLastMatch = function(text, searchString) {

};

module.exports.substringBetweenMatches = function(text, searchString) {

};
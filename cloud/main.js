// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:
AV.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});
AV.Cloud.define("welcome", function(request, response) {
  response.success("Welcome to here!");
});
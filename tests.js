test("make sure that it returns 'helloWorld'", function(assert) {
  assert.equal( helloWorld () , "helloWorld");
});


test("takes a username as parameter and returns 'Hello'" ,  function(assert){
	assert.equal(hello_uppercase("sxosh2010") , "hello , sxosh2010");
	

 });



test("takes a username as parameter and returns as 'Hello'" , function(assert){
assert.equal(hello_joe("Joe") , "Hello!");
assert.equal(hello_joe("Bob") , "Hello!");
assert.equal(hello_joe("Sxosh"),"Hello, Sxosh!");
});




test("takes a number as a parameter (n) and returns a list of numbers from 1 to 'n'", function(assert){
	assert.deepEqual(number_list(10),[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});


test("takes a number as a parameter (n) and returns the sum of numbers from 1 to 'n'", function(assert){
    assert.deepEqual(sum_numbers(5),45);
});


test("takes a string parameter and returns the length of the supplied 'parameter'",function(assert){
	assert.equal(length("sxosh"), 5);
});


test("takes a string parameter and returns the supplied parameter in 'uppercase'",function(assert){
	assert.equal(upper("sxosh"),  "sxosh");
});







test("takes a string parameter and returns the reversed string 'parameter'",function(assert){
	assert.equal(reverse("sxosh"), "hsoxs");
});










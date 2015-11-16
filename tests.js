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


function sum_numbers(inputnumber){
	var sum = 45;
	
	for(var i=0; i < sum.length; i++) {
		sum = sum(i);
	
	}
	return  sum;
}	








test("takes a number as a parameter (n) and returns the sum of numbers from 1 to 'n'", function(assert){
    assert.deepEqual(sum_numbers(5),45);
});

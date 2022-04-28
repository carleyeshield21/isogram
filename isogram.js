// This is the link to codewars JavaScript problem
// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

function isIsogram(str){
// First, we convert the string to all lowercase and assign a variable to its length 
word = str.toLowerCase()
wordlength = word.length

// Then we create an array wordarr so we can push each element in it from the str variable
wordarr = []
    for(i=0; i<=wordlength-1; i++){
	    wordarr.push(word[i])
    }

    // Here we use while loop and slice
    j=0
    while(j<=wordarr.length-1){
	    x = word[j]
	    // console.log(x)
	    arr1 = wordarr.slice(j+1,wordarr.length)
        // console.log(arr1)
        // console.log('======') 
	    j++
	
    for(i=0; i<=arr1.length-1; i++){
   	    if(x == arr1[i]){
		console.log(x + ' has a duplicate')
		console.log(word + ' is NOT an Isogram')
		return 0
	    } 
	
        }

    }
console.log(word + ' is an Isogram')

}
isIsogram('Dermatoglyphics')
console.log('=====')
isIsogram('Sputnik k')
console.log('=====')
isIsogram('carleyeshield')

// In order for us to determine the relationship of indices in our loops and conditional statements, we can use this technique of outputting one by one our desired results and determining how the indices will change in every iteration
// word = 'Derma'
// word = word.toLowerCase();
// wordlength = word.length

// console.log(word[0], word[1])
// console.log('=====')
// console.log(word[0], word[2])
// console.log('=====')
// console.log(word[0], word[3])
// console.log('=====')
// console.log(word[0], word[3])
// console.log('=====')
// console.log(word[0], word[4])
// console.log('=====')

// console.log(word[1], word[2])
// console.log('=====')
// console.log(word[1], word[3])
// console.log('=====')
// console.log(word[1], word[4])
// console.log('=====')

// console.log(word[2], word[3])
// console.log('=====')
// console.log(word[2], word[4])
// console.log('=====')

// console.log(word[3], word[4])
// console.log('=====')
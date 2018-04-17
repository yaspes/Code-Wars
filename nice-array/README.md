Problem Domain: Write a function that checks whether a passed array is "nice"(n-1 or n+1 for every n value). The function returns a boolean    value after chcking the array.

Algorithim: Algorithm: Loop through each number of the array
	Check if current num is +1 or -1 than any other number in the array
	Continue until one number doesn't have a n+1 or n-1, then return false
	If all numbers pass, then return true

Pseudo-coding:
	//Input -> array of numbers
	//Output -> boolean validation 

Link: https://www.codewars.com/kata/59b844528bcb7735560000a0/solutions/javascript

Overview: I found this kata pretty difficult, at least compared to some of the other we have done. I tried to solve this using nested for loop which I'm positive is still possible. By using the includes array method, I was able to simplify this processes and reduce the lines of code. 
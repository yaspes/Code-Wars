Problem Domain: Fix the code so that it replaces all periods in the specified string with dashes.

Link: https://www.codewars.com/kata/fixme-replace-all-dots/javascript

Overview: I looked up what regular expression are since I wasn't familiar with it beforehand. The function was searching for all periods using '/./' which is actually a metacharacter. I fixed this by using a escape character. Another problem I ran into was that the replace method only replaced one character. I used the character 'g' which does a global match.
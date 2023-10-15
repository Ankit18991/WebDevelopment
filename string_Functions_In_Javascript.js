var str = "My Name is Utkarsh";
console.log(str);
console.log(`The length of the string "${str}" = ` + str.length);

// indexOf() : To get the First Occurance of the Substring within a String 
var position = str.indexOf('Name');
console.log(position);

// lastIndexOf() : TO get the LAst occurance of the sub - string in the string
position = str.lastIndexOf('s');
console.log(position);

// String - SLicing Methods :-
// 1. slice()
var newstr = str.slice(0,7);
console.log(newstr);

// 2. substring()
newstr = str.substring(3,10);
console.log(newstr);

// 3. substr()
newstr = str.substr(3,10);
// It starts from the given index i.e., 3 in this case and slices the the given number of characters in the substring,
// i.e., 10 in this case
console.log(newstr);

// String Concatenation:-
// 1. Using '+':-
var str2 = ` And I know , i am a 'Good Boy'`;
console.log(str+str2);

// 2. Using concat() function:-
console.log(str.concat(str2));

// Replacing the sub-string with another:-
// Using replace() :-
var str3 = `......................................  You 'll never Know`;
var replaced = str.replace('Utkarsh', str3);
console.log(replaced);

// Changing the cases of the strings:-
// 1. toUpperCase() :-
console.log(str.toUpperCase());

// 2. toLowerCase() :-
console.log(str.toLowerCase());
console.log(`The original String is still "${str}"`);

// trim() : Trims the whitespace at the beginnning and at the end of the string, but does not trims the whitespace in the middle
var to_Be_Trimmed = "               ..Whitespaces  in the beg and end To be         trimmed            ";
console.log(to_Be_Trimmed);
var trimmed = to_Be_Trimmed.trim();
console.log(trimmed);

//  TO extract the character at a specific position :-
// Way 1:-
console.log(str.charAt(6));

// Way 2:-
console.log(str[6]);

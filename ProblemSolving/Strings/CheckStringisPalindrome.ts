let input: string = 'madam';

function checkPalindrome(str: string): string {
    let reverseStr: string = ''

    for (const s of str) {
        reverseStr = s + reverseStr
    }
    console.log(reverseStr)

    if (str === reverseStr) {
        return 'String is palindrome'
    } else {
        return 'String is not palindrome'
    }
}

console.log(checkPalindrome(input))

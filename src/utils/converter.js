/*
 * Copyright (c) 2020 Kevin Pardosi - Sprout Digital Labs.
 * All rights reserved.
 */

'use script';

/**
 * Convert a string to leadinguppercase and lower the rest
 *
 * @param str
 * @return {string}
 */
function leadingUppercase(str) {
    str = str.toString()
        .toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
    return str;
};

/**
 * Convert a text become leadinguppercase for each word
 * @param str
 * @return {string}
 */
function leadingUppercaseText(str) {
    str = str.toLowerCase()
        .split(' ')
        .map((s) => s.length >= 5 ? (s.charAt(0).toUpperCase() + s.substring(1)) : s.toUpperCase())
        .join(' ');
    str = str.replace(/bank/i, 'Bank');
    str = str.replace(/kec/i, 'Kec');
    str = str.replace(/kel/i, 'Kel');
    return str;
};

module.exports = {
    leadingUppercase,
    leadingUppercaseText
}

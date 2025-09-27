class Codec {
    // Encode a list of strings to a single string
    encode(strs) {
        let encoded = '';
        for (let str of strs) {
            encoded += str.length + '#' + str; // length + '#' + string
        }
        return encoded;
    }

    // Decode a single string back to a list of strings
    decode(s) {
        let res = [];
        let i = 0;

        while (i < s.length) {
            // Find the position of '#'
            let j = i;
            while (s[j] !== '#') j++;

            // Extract the length of the string
            let len = Number(s.slice(i, j));
            // Extract the string itself
            res.push(s.slice(j + 1, j + 1 + len));

            // Move to the next string
            i = j + 1 + len;
        }

        return res;
    }
}

// Example usage:
let codec = new Codec();
let strs = ["neet", "code", "love", "you"];
let encoded = codec.encode(strs);
console.log("Encoded:", encoded);

let decoded = codec.decode(encoded);
console.log("Decoded:", decoded);

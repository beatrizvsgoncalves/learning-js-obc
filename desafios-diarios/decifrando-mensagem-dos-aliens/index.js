function decoding() {
    const message = [3, 15, 4, 9, 14, 7, 32, 9, 19, 32, 6, 21, 14];
    const blankSpace = " ";
    const alphabet = [
        ',', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    let decodedMessage = "";

    message.forEach(function (number) {
        if (alphabet[number]) {
            decodedMessage += alphabet[number]
        } else {
            decodedMessage += blankSpace
        }
    });
    
    console.log(decodedMessage);
}

decoding();
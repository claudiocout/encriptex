document.getElementById('encrypt').addEventListener('click', function () {
    const inputText = document.getElementById('input').value;
    function encryptText(text) {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        const encryptedText = text
            .toLowerCase() // Transforma o texto em minúsculas
            .split('') // Divide o texto em um array de caracteres
            .map(char => {
                if (alphabet.includes(char)) {
                    const originalIndex = alphabet.indexOf(char);
                    const newIndex = alphabet.length - 1 - originalIndex;
                    return alphabet[newIndex];
                }
                return char; // Mantém caracteres não alfabéticos inalterados
            })
            .join(''); // Junta os caracteres de volta em uma string
        return encryptedText;
    }
    
    // Exemplo de uso:
    const originalText = 'hello';
    const encryptedResult = encryptText(originalText);
    console.log('Texto original:', originalText);
    console.log('Texto encriptado:', encryptedResult);
    
    const encryptedText = inputText.replace(/a/g, 'z').replace(/b/g, 'y');
    document.getElementById('output').textContent = encryptedText;
});

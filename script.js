const userInput = document.getElementById('userInput');
const generateBtn = document.getElementById('generateBtn');
const output = document.getElementById('output');

generateBtn.addEventListener('click', () => {
    const inputText = userInput.value.trim();

    if (!inputText) {
        output.textContent = "Please enter a request or text to generate your email!";
        return;
    }

    // Fancy email generation with dynamic content
    const generatedEmail = `
Dear [Recipient],

${inputText}

Thank you for your time and consideration.

Best regards,
[Your Name]
`;

    output.textContent = generatedEmail;
});


import { GEMINI_URL, API_KEY } from './credentials.js';

export const sendPrompt = async (prompt) => {
    console.log("Sending Prompt Running :: ", prompt);
    const response = await fetch(GEMINI_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "x-goog-api-key": API_KEY,
        },
        body: JSON.stringify({
            "contents": [
                {
                    "parts": [
                        {
                            "text": prompt
                        }
                    ]
                }
            ]
        })
    });


    console.log("Response Status:", response.status);
    const data = await response.json();
    console.log("Response Data:", data.candidates[0].content
        .parts[0].text);

    const text = data.candidates[0].content
        .parts[0].text;

    return text;
}
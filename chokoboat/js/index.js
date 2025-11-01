
import { sendPrompt } from "./prompt.js";




// when user click on send button

const send_btn = document.querySelector(".prompt-btn");

console.log("Send Button:", send_btn);

send_btn.addEventListener("click", async () => {
    console.log("Send Button Clicked");
    const prompt_input = document.querySelector(".prompt-inp");
    console.log("Prompt Input Element:", prompt_input);
    const prompt = prompt_input.value;
    console.log("Prompt Value:", prompt);



    const chat_container = document.querySelector(".response-container");

    const prompt_paragraph = document.createElement("div");
    prompt_paragraph.style.marginBottom = "10px";
    prompt_paragraph.style.textAlign = "left";
    prompt_paragraph.style.width = "25%";
    // prompt_paragraph.style.background = "#4e8fff";
    prompt_paragraph.style.padding = "10px";
    prompt_paragraph.style.borderRadius = "10px";
    prompt_paragraph.style.color = "white";
    prompt_paragraph.style.fontWeight = "bold";
    prompt_paragraph.style.fontSize = "1.2rem";
    prompt_paragraph.style.margin = "10px 0";
    prompt_paragraph.style.border = "1px solid #444444";
    prompt_paragraph.textContent = prompt;


    chat_container.appendChild(prompt_paragraph);
    const res_text = await sendPrompt(prompt);
    prompt_input.value = "";
    const paragraph = document.createElement("div");
    paragraph.style.marginBottom = "10px";
    paragraph.style.textAlign = "right";
    paragraph.style.width = "50%";
    // paragraph.style.background = "#4e8fff";
    paragraph.style.padding = "10px";
    paragraph.style.borderRadius = "10px";
    paragraph.style.color = "white";
    paragraph.style.fontWeight = "bold";
    paragraph.style.fontSize = "1.2rem";
    paragraph.style.margin = "10px 0";
    paragraph.style.marginLeft = "auto";
    paragraph.style.border = "1px solid #444444";
    paragraph.textContent = res_text;
    chat_container.appendChild(paragraph);
});





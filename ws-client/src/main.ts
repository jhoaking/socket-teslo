import { connectToServer } from "./socket-client";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
   <h1>Websockets - Client</h1>

   <span id="server-status">Offline</span>

   <ul id="clients-ul"> </ul>

   <form id="message-form">
    <input placeholder="message" id="message-input" /> 
   </form>
  </div>
`;

//setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
connectToServer();

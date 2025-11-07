/*
const ClientDate = new Date();
let ClientUsername = document.getElementById("UsernameInput").value;
let ClientSession = ClientUsername + ClientDate.getDate() + ClientDate.getMilliseconds();

function openServer(){
    
}
function declareEnv(){
    const serverName = ClientSession + "Server"; 
    const date = new Date();
    const serverStartDate = date.getHours + " " + date.getMinutes + " " + date.getDate;
    
    console.log(serverName + " " + serverStartDate);
    
}
*/
    

function declareEnv2() {
        const ClientDate = new Date();
        let ClientUsername = document.getElementById("UsernameInput").value;
        let ClientSession = ClientUsername + ClientDate.getDate() + ClientDate.getMilliseconds();
        
        // Server And Client Information
        const serverName = ClientSession + "Server";
        const date = new Date();
        const serverStartDate = date.getHours + " " + date.getMinutes + " " + date.getDate;
        console.log(serverName + " " + serverStartDate);
        console.log(ClientSession + " Is the base client Session")
        }   
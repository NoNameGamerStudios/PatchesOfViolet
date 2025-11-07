addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("makeServer").onclick = readInformation;

    function readInformation() {
        const ClientDate = new Date();
        let ClientUsername = document.getElementById("UsernameInput").value;
        let ClientSession = ClientUsername + ClientDate.getDate() + ClientDate.getMilliseconds();
        console.log("User Session ID is " + ClientSession);

        declareEnv();
        createServerVisiblity();
        
        return ClientSession;
    }
    function declareEnv() {
        const date = new Date();
        let ClientUsername = document.getElementById("UsernameInput").value;
        let ClientSession = ClientUsername + date.getDate() + date.getMilliseconds();
        // Server And Client Information
        const serverID = "Server" + ClientSession;

        const serverStartDate = date.getHours() + ":" + date.getMinutes();

        const serverTitle = ClientUsername + "'s Server";
        if (!ClientUsername.trim()) {
            alert("Please Create A Username");
        } else {
            console.info("Server ID is:" + serverID);
            console.info("Server Start Date is " + serverStartDate);
            console.info("Client Username Is " + ClientUsername + " Client Session Is " + ClientSession);
            console.info("Server Title Is " + serverTitle);
        }
    }
    function createServerVisiblity() {
        console.error(ClientSession);
        peer.on('connection', function(conn) { 
            console.log("A connection has been made.");
         });
    }
});

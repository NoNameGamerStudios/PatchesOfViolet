addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("scanNetwork").onclick = sendPacket;

    // Temporarily Deprecated; Will look into reactivation
    /*
    function findRooms() {
        const ClientDate = new Date();
        let ClientUsername = document.getElementById("UsernameInput").value;
        let ClientSession = ClientUsername + ClientDate.getDate() + ClientDate.getMilliseconds();
        let roomFound = false;
        if (!ClientUsername.trim()) {
            console.warn("User Did not create a username, aborting.");
            alert("Please Create A Username");
        } else {
            console.log("User Session ID is " + ClientSession);
        }
    }
*/

    function sendPacket() {
        const userDate = new Date();

        const clientDateSent = userDate.getHours() + ":" + userDate.getMinutes();
        console.log(clientDateSent + " " + clientUsername);
        let ClientUsername = document.getElementById("UsernameInput").value;
        let ClientSession = ClientUsername + ClientDate.getDate() + ClientDate.getMilliseconds();
        // Logic For Connection

        const peer = new Peer(ClientSession);
        var conn = peer.connect();
        // on open will be launch when you successfully connect to PeerServer
        conn.on("open", function () {
            // here you have conn.id
            conn.send("User" + clientUsername + " has joined the room.");
            console.log("User ID is" + id);
        });
        peer.on("open", function (id) {
            console.log("My peer ID is: " + id);
        });
        // document.getElementById("sendMessage").onclick = sendPacket;
    }
});

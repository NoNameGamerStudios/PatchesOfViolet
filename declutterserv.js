addEventListener("DOMContentLoaded", (event) => {
    const ClientDate = new Date();
    let ClientUsername = document.getElementById("UsernameInput").value;
    let ClientSession = ClientUsername + ClientDate.getDate() + ClientDate.getMilliseconds();

    document.getElementById("scanNetwork").onclick = initContext;
    let peer = new Peer(ClientSession);
    
    function initContext() {
        

        if (!ClientUsername.trim()) {
            console.warn("User Did Not Create a Username! Aborting.");
            alert("Please Create A Username.");
        } else {
            console.log(ClientSession);
            peer.on("open", function (id) {
            console.log("My peer ID is: " + id);
        });
        }
    }
});

addEventListener("DOMContentLoaded", (event) => {
    const ClientDate = new Date();
    let ClientUsername = document.getElementById("UsernameInput").value;
    let ClientSession = ClientUsername + ClientDate.getDate() + ClientDate.getMilliseconds();

    document.getElementById("scanNetwork").onclick = initContext;
    let peer = new Peer(ClientSession);

    function initContext() {
        let peer = new Peer(ClientSession);
        console.log(ClientSession + " Is the standard client session ID");
        peer.on("open", function (id) {
            console.log("My peer ID is: " + id);
        });
    }
});

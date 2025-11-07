document.getElementById("scanNetwork").onclick = initContext;
document.getElementById("makeServer").onclick = serverSide;

//variables
let connectionAddress = document.getElementById("destinationAddress").value;



function initContext() {
    const ClientDate = new Date();
    let ClientUsername = document.getElementById("UsernameInput").value;
    let ClientSession = "Patch" + ClientUsername + ClientDate.getDate() + ClientDate.getMilliseconds();
  

    let peer = new Peer(ClientSession);
    console.log(ClientSession + " Is the standard client session ID");
    peer.on("open", function(id) {
        console.log("My peer ID is: " + id);
        // Below code should allow for connections to a specific ID
        var conn = peer.connect(connectionAddress, {debug: 3});
        conn.on('open', function() {
            // Receive messages
            conn.on('data', function(data) {
                console.log('Received', data);
            });

            // Send messages
            conn.send('Hi! My User Is ' + ClientUsername);
        });
    });
}




// Server Logic

function serverSide() {
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


    let peer = new Peer(serverID, {debug: 3});
    
    var conn = peer.connect(connectionAddress);



    conn.on('open', function() {
        // Receive messages
        conn.on('data', function(data) {
            console.log('Received', data);
        });

        // Send messages
        conn.send('Hi! My User Is ' + ClientUsername);
    });

    peer.on('connection', function(conn) {
        console.log("A connection has been made.");
    });
}
addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("makeServer").onclick = declareEnv;

  
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

        let peer = new Peer(serverID);
        peer.on('connection', function(conn) {
            console.log("I don't know what im doing with this function :p");
         });

         
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
});

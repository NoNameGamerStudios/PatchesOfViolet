(function() {
    // Dynamically import CSS file
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'styles.css';
    document.head.appendChild(link);

    // Create toggle button
    const toggleConsoleBtn = document.createElement('div');
    toggleConsoleBtn.id = 'toggleConsoleBtn';
    toggleConsoleBtn.className = 'toggle-console-btn';
    toggleConsoleBtn.textContent = 'Show Console';
    document.body.appendChild(toggleConsoleBtn);

    // Create console container
    const consoleContainer = document.createElement('div');
    consoleContainer.id = 'consoleContainer';
    consoleContainer.className = 'console-container';
    document.body.appendChild(consoleContainer);

    let consoleVisible = false;

    // Toggle console visibility
    toggleConsoleBtn.addEventListener('click', function() {
        consoleVisible = !consoleVisible;
        if (consoleVisible) {
            consoleContainer.classList.add('show');
            toggleConsoleBtn.textContent = 'Hide Console';
            toggleConsoleBtn.style.bottom = 'calc(200px + 20px)'; // Adjust based on console window height
        } else {
            consoleContainer.classList.remove('show');
            toggleConsoleBtn.textContent = 'Show Console';
            toggleConsoleBtn.style.bottom = '10px'; // Set back to bottom of the screen
        }
    });

    // Save reference to original console methods
    const originalConsoleLog = console.log;
    const originalConsoleInfo = console.info;
    const originalConsoleDebug = console.debug;
    const originalConsoleWarn = console.warn;
    const originalConsoleError = console.error;

    // Override console.log method
    console.log = function() {
        // Call original console.log with the arguments
        originalConsoleLog.apply(console, arguments);

        // Output message to UI with color (limegreen)
        appendToConsole(arguments, 'log', 'limegreen');
    };

    // Override console.info method
    console.info = function() {
        // Call original console.info with the arguments
        originalConsoleInfo.apply(console, arguments);

        // Output message to UI with color (cornflowerblue)
        appendToConsole(arguments, 'info', 'cornflowerblue');
    };

    // Override console.debug method
    console.debug = function() {
        // Call original console.debug with the arguments
        originalConsoleDebug.apply(console, arguments);

        // Output message to UI with color (darkgray)
        appendToConsole(arguments, 'debug', 'darkgray');
    };

    // Override console.warn method
    console.warn = function() {
        // Call original console.warn with the arguments
        originalConsoleWarn.apply(console, arguments);

        // Output message to UI with color (orange)
        appendToConsole(arguments, 'warn', 'orange');
    };

    // Override console.error method
    console.error = function() {
        // Call original console.error with the arguments
        originalConsoleError.apply(console, arguments);

        // Output message to UI with color (orangered)
        appendToConsole(arguments, 'error', 'orangered');
    };

    // Function to append message to UI
    function appendToConsole(args, messageType, color) {
        const message = Array.prototype.slice.call(args).join(' '); // Convert arguments to a string
        const messageElement = document.createElement('p');
        messageElement.textContent = message;
        if (color) {
            messageElement.style.color = color;
        }
        if (messageType) {
            messageElement.classList.add(messageType);
        }
        const consoleContainer = document.getElementById('consoleContainer');
        consoleContainer.appendChild(messageElement);
        // Scroll to bottom (assuming console-output is the ID of your console container)
        consoleContainer.scrollTop = consoleContainer.scrollHeight;
    }

})();
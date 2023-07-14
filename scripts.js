// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener('load', function() {
    const takeoffButton = document.getElementById('takeoff');
    const flightStatusParagraph = document.getElementById('flightStatus');
    const spaceShuttleBackground = document.getElementById('shuttleBackground');
    const spaceShuttleHeightElement = document.getElementById('spaceShuttleHeight');
    const landButton = document.getElementById('landing');
    const missionAbortButton = document.getElementById('missionAbort');
    const upButton = document.getElementById('up');
    const downButton = document.getElementById('down');
    const rightButton = document.getElementById('right');
    const leftButton = document.getElementById('left');

    takeoffButton.addEventListener('click', function(){
        let readyForTakeoff = window.confirm("Confirm that the shuttle is ready for takeoff.");

        if (readyForTakeoff) {
            flightStatusParagraph.innerHTML = 'Flight status: Shuttle in flight';
            spaceShuttleBackground.style.backgroundColor = 'blue';
    
            let spaceShuttleHeight = 0;
            spaceShuttleHeight += 10000;
            spaceShuttleHeightElement.innerHTML = spaceShuttleHeight;
            };
        });

    landButton.addEventListener('click', function(){
        let landingEngaged = window.alert("The shuttle is landing. Landing gear engaged.");
    })
    });

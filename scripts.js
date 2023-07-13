// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener('load', function() {
    let takeoffButton = document.getElementById('takeoff');
    let flightStatus = document.getElementById('flightStatus');
    let shuttleBackground = document.getElementById('shuttleBackground');
    let spaceShuttleHeightElement = document.getElementById('spaceShuttleHeight');

    takeoffButton.addEventListener('click', ()=> {
        let readyForTakeoff = confirm("Confirm that the shuttle is ready for takeoff.");

        if (readyForTakeoff) {
            flightStatus.innerHTML = 'Flight status: Shuttle in flight';
            shuttleBackground.style.backgroundColor = 'blue';
    
            let spaceShuttleHeight = 0;
            spaceShuttleHeight += 10000;
            spaceShuttleHeightElement.innerHTML = spaceShuttleHeight;
            console.log(`Shuttle height: ${spaceShuttleHeight} miles`);
            };
        });
    });

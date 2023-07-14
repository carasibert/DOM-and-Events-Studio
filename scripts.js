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
    let shuttleAlt = Number(spaceShuttleHeightElement.innerHTML);
    let shuttleImage = document.getElementById('rocket');
    shuttleImage.style.position = 'relative';
    shuttleImage.style.left = '0px';
    shuttleImage.style.top = '250px';

    takeoffButton.addEventListener('click', function(){
        let readyForTakeoff = window.confirm("Confirm that the shuttle is ready for takeoff.");

        if (readyForTakeoff) {
            flightStatusParagraph.innerHTML = 'Flight status: Shuttle in flight';
            spaceShuttleBackground.style.backgroundColor = 'blue';
    
            let spaceShuttleHeight = 0;
            spaceShuttleHeight += 10000;
            spaceShuttleHeightElement.innerHTML = spaceShuttleHeight;
            shuttleImage.style.top = "240px";
            shuttleImage.style.left = "0px";
            };
        });

    landButton.addEventListener('click', function(){
        window.alert('The shuttle is landing. Landing gear engaged.');
        flightStatusParagraph.innerHTML = 'The shuttle has landed.';
        spaceShuttleBackground.style.backgroundColor = 'green';
        shuttleAlt = 0;
        spaceShuttleHeightElement.innerHTML = shuttleAlt;
        shuttleImage.style.bottom = "0px";
        shuttleImage.style.top = "250px";
        shuttleImage.style.left = "0px";
    });

    missionAbortButton.addEventListener('click', function(){
        let abortConfirm = window.confirm('Confirm that you want to abort the mission.');

        if (abortConfirm) {
            flightStatusParagraph.innerHTML = 'Mission aborted';
            spaceShuttleBackground.style.backgroundColor = 'green';
            shuttleAlt = 0;
            spaceShuttleHeightElement.innerHTML = shuttleAlt;
            shuttleImage.style.bottom = "0px";
            shuttleImage.style.top = "250px";
            shuttleImage.style.left = "0px";
        }
    });

    upButton.addEventListener('click', function(){
        let currentHeight = parseInt(shuttleImage.style.top);
        if (currentHeight <= 0) {
            shuttleImage.style.top = currentHeight
        } else {
        shuttleImage.style.top = (currentHeight - 10) + "px";
        shuttleAlt += 10000;
        }
        spaceShuttleHeightElement.innerHTML = shuttleAlt;
    });

    downButton.addEventListener('click', function(){
        let currentHeight = parseInt(shuttleImage.style.top);
        shuttleImage.style.top = (currentHeight + 10) + "px";
        shuttleAlt -= 10000;
        spaceShuttleHeightElement.innerHTML = shuttleAlt;

    });

    leftButton.addEventListener('click', function(){
        let currentWidth = parseInt(shuttleImage.style.left);
        shuttleImage.style.left = (currentWidth - 10) + "px";
    });

    rightButton.addEventListener('click', function(){
        let currentWidth = parseInt(shuttleImage.style.left);
        shuttleImage.style.left = (currentWidth + 10) + "px";
    });
});


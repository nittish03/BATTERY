const battery = document.querySelector('.battery-level');
const startButton = document.getElementById('start');
const batteryStatus = document.getElementById('battery-status');
const batteryCase = document.getElementById('battery');

let isCharging = false;
let level = 0; // 0 to 100
let chargingInterval;

function updateBatteryLevel(perc) {
    battery.style.height = perc + "%";
    // Fancier blur & shadow at full charge
    if (perc >= 100) {
        batteryCase.classList.add('charged');
        batteryStatus.textContent = "Battery Status: Fully Charged!";
    } else if(perc === 0) {
        batteryCase.classList.remove('charged');
        batteryStatus.textContent = "Battery Status: Idle";
    } else {
        batteryCase.classList.remove('charged');
        batteryStatus.textContent = "Battery Status: Charging (" + perc + "%)";
    }
}

// Start charging animation (simulated)
function startCharging() {
    if (level >= 100) level = 0; // resets if already full
    isCharging = true;
    startButton.textContent = 'STOP';
    chargingInterval = setInterval(() => {
        if (level < 100) {
            level += 2;
            if(level > 100) level = 100;
            updateBatteryLevel(level);
        } else {
            clearInterval(chargingInterval);
            updateBatteryLevel(100);
            isCharging = false;
            startButton.textContent = 'RESTART';
        }
    }, 100);
}

// Stop charging, reset battery visually
function stopCharging() {
    isCharging = false;
    clearInterval(chargingInterval);
    level = 0;
    battery.style.height = "0";
    startButton.textContent = 'START';
    batteryCase.classList.remove('charged');
    batteryStatus.textContent = "Battery Status: Idle";
}

startButton.addEventListener('click', () => {
    if (!isCharging && level === 100) {
        // If battery is full and animation stopped, reset for another run
        level = 0;
        battery.style.height = "0";
        batteryCase.classList.remove('charged');
    }
    if (isCharging) {
        stopCharging();
    } else {
        startCharging();
    }
});

// On load, ensure reset
updateBatteryLevel(0);

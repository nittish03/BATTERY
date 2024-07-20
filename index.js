const battery = document.querySelector('.battery-level');
const startButton = document.getElementById('start');
const batteryStatus = document.getElementById('battery-status');

let isCharging = false;

function toggleCharging() {
    isCharging = !isCharging;
    if (isCharging) {
        startCharging();
    } else {
        stopCharging();
    }
}

function startCharging() {
    battery.style.animation = 'charging 6s linear infinite alternate';
    startButton.textContent = 'STOP';
    batteryStatus.textContent = 'Battery Status: Charging';
}

function stopCharging() {
    battery.style.animation = 'none';
    battery.style.height = '0';
    startButton.textContent = 'START';
    batteryStatus.textContent = 'Battery Status: Idle';
}

startButton.addEventListener('click', toggleCharging);
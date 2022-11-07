let homeCount = 0
let guestCount = 0
let plusHomeScoreOne = document.getElementById("plusHomeOne")
let plusHomeScoreTwo = document.getElementById("plusHomeTwo")
let plusHomeScoreThree = document.getElementById("plusHomeThree")
let plusGuestScoreOne = document.getElementById("plusOneGuest")
let plusGuestScoreTwo = document.getElementById("plusTwoGuest")
let plusGuestScoreThree = document.getElementById("plusThreeGuest")

function addOneHome() {
    homeCount += 1
    homeScoreBox.textContent = homeCount
}

function addTwoHome() {
    homeCount += 2
    homeScoreBox.textContent = homeCount
}

function addThreeHome() {
    homeCount += 3
    homeScoreBox.textContent = homeCount
}

function addOneGuest() {
    guestCount += 1
    guestScoreBox.textContent = guestCount
}

function addTwoGuest() {
    guestCount += 2
    guestScoreBox.textContent = guestCount
}

function addThreeGuest() {
    guestCount += 3
    guestScoreBox.textContent = guestCount
}
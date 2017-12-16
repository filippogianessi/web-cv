var stylisticSet = [
    '"ss01"',
    '"ss02"',
    '"ss03"',
    '"ss04"',
    '"ss05"',
    '"ss06"',
    '"ss07"',
    '"ss08"',
    '"ss09"'
];

var min = 1;
var max = 9;
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$('html').click(function(j) {
    x = getRandomInt(9, 1)
    console.log(getRandomInt(9, 1));
    $('html').css('font-feature-settings', stylisticSet[x])
    j.preventDefault()
});

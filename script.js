function showTab(tabId) {
    document.getElementById('happy-tab').style.display = 'none';
    document.getElementById('sad-tab').style.display = 'none';
    document.getElementById('beyond-tab').style.display = 'none';
    const tab = document.getElementById(tabId + '-tab');
    tab.style.display = 'block';
    tab.style.animation = 'fadeIn 1s';
}
function showSubStory(storyId) {
    document.getElementById('sad1').style.display = 'none';
    document.getElementById('sad2').style.display = 'none';
    document.getElementById('sad3').style.display = 'none';
    document.getElementById(storyId).style.display = 'block';
}
window.onload = function() {
    const audio = document.querySelector('audio');
    audio.play().catch(() => {});
};

let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector('select');

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach(voice => {
        let option = document.createElement('option');
        option.textContent = voice.name + ' (' + voice.lang + ')';

        option.setAttribute('data-lang', voice.lang);
        option.setAttribute('data-name', voice.name);

        voiceSelect.appendChild(option);
    });
}

voiceSelect.addEventListener('change', () => {
    speech.voice = voices[voiceSelect.selectedIndex];
});

document.querySelector('button').addEventListener('click', () => {
    speech.text = document.querySelector('input').value;
    window.speechSynthesis.speak(speech);
});
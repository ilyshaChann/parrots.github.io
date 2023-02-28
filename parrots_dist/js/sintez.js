let recognizer = new webkitSpeechRecognition();
const textEl = document.getElementById('text');
const btn_red = document.getElementById('btn-y');
let flag = 1;
// Ставим опцию, чтобы распознавание началось ещё до того, как пользователь закончит говорить
recognizer.interimResults = true;

// Какой язык будем распознавать?
recognizer.lang = 'ru-Ru';

// Используем колбек для обработки результатов
recognizer.onresult = function (event) {
	let result = event.results[event.resultIndex];
	if (result.isFinal) {
		// Даю переменной textSpeek речь которую я
		textEl.innerHTML = result[0].transcript;
	}
};

function speech () {
	if(flag == 1) {
		textEl.innerHTML = '';
		recognizer.start();
		console.log("1")
		btn_red.classList.add('btn-y')
		flag = 2;
	} else {
		btn_red.classList.remove('btn-y')
		stop ();
	}
}

function stop () {
	synth.pause();
	console.log("2")
	flag = 1;
	window.speechSynthesis.cancel();

	// прочитать текст
	const text = textEl.value;
	const utterance = new SpeechSynthesisUtterance(text);
	window.speechSynthesis.speak(utterance);
}

const synth = window.speechSynthesis;


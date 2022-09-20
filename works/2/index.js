//クイズの内容を構造体として定義する。
const quiz = [{
  question:'Q1',//問題
  answers: [//選択肢
    'A1',
    'A2',
    'A3',
    'A4'
  ],
  correct: 'A1'//正解
},
{
  question:'Q2',
  answers: [
    'A1',
    'A2',
    'A3',
    'A4'
  ],
  correct: 'A2'
},{
  question:'Q3',
  answers: [
    'A1',
    'A2',
    'A3',
    'A4'
  ],
  correct: 'A3'
}]

//今後必要になる変数や定数を定義する。
const quizLength = quiz.length; //クイズの問題数
let quizIndex = 0;//while文で使う変数
let score = 0;//点数の変数
const $button = document.getElementsByTagName('button');//ボタンの定義文を短く再定義
const buttonLength = $button.length;//クイズで使う選択肢（ボタン）の数

//クイズの問題と選択肢を表示する。
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex  = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

//選択肢をクリックしたときの処理
const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  }else{
    window.alert('不正解！');
  }
  quizIndex++;
  if(quizIndex < quizLength){
    setupQuiz();
  }else{
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
    window.close();
  }
}

//クリックイベントを定義する。
let handlerIndex = 0;
while(handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click',(e) => {
    clickHandler(e);
  })
  handlerIndex++;
}


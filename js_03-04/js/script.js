var objTest = {
  body: document.body,
  wrapper: document.createElement('div'),
  title: document.createElement('h2'),
  buttonForm: document.createElement('form'),
  buttonInput: document.createElement('input'),
  testBox: function genWrapper() {
    this.wrapper.classList.add('wrapper');
    this.body.appendChild(this.wrapper);
    //---------------= Стили Враппера=---------------
    this.body.style.backgroundColor = '#ffffff';
    this.wrapper.style.backgroundColor = '#f2f9fc';
    this.wrapper.style.border = '1px solid #c9e6f2';
    this.wrapper.style.borderRadius = '3px';
    this.wrapper.style.fontFamily = 'Arial';
    this.wrapper.style.color = '#666666';
    this.wrapper.style.width = '800px';
    this.wrapper.style.marginLeft = '50px';
    this.wrapper.style.marginTop = '30px';
    this.wrapper.style.margin = '0px auto';

    this.title.classList.add('title');
    this.title.innerHTML = 'Тест по программированию';
    this.wrapper.appendChild(this.title);
    //---------------= Стили Заголовка =---------------
    this.title.style.fontSize = '19px';
    this.title.style.color = '#4078c0';
    this.title.style.textAlign = 'center';
    this.title.style.fontWeight = '300';

    this.buttonForm.classList.add('button');
    this.buttonForm.setAttribute('action', 'index.html');
    this.buttonForm.setAttribute('method', 'post');
    this.wrapper.appendChild(this.buttonForm);
    //---------------= Стили Формы=---------------
    this.buttonForm.style.margin = '0 auto';
    this.buttonForm.style.textAlign = 'center';

    this.buttonInput.setAttribute('type', 'submit');
    this.buttonInput.setAttribute('name', 'checkresults');
    this.buttonInput.setAttribute('value', 'Проверить мои результаты');
    this.buttonForm.appendChild(this.buttonInput);
    //---------------= Стили Кнопки =---------------
    this.buttonInput.style.cursor = 'pointer';
    this.buttonInput.style.border = '0px';
    this.buttonInput.style.marginTop = '30px';
    this.buttonInput.style.marginBottom = '30px';
    this.buttonInput.style.backgroundColor = '#cfe2f3';
    this.buttonInput.style.border = '2px solid #767676';
    this.buttonInput.style.borderRadius = '3px';
    this.buttonInput.style.width = '325px';
    this.buttonInput.style.height = '51px';
    this.buttonInput.style.fontSize = '19px';
    this.buttonInput.style.color = '#4078c0';
  },
  testQuestions: function testQuest() {

    var questionsBox = document.createElement('form');
    questionsBox.classList.add('question-box');
    questionsBox.setAttribute('action', 'index.html');
    questionsBox.setAttribute('method', 'post');
    this.wrapper.insertBefore(questionsBox, this.buttonForm);
    questionsBox.style.marginTop = '40px';

    for (var i = 1; i < 4; i++) {
      i = i++;
      var question = document.createElement('ul');
      question.classList.add('question');
      questionsBox.appendChild(question);

      question.style.listStyleType = 'none';
      question.style.marginTop = '25px';

      var questionTitle = document.createElement('span');
      questionTitle.classList.add('question-title');
      questionTitle.innerHTML = i + '. Вопрос №' + i;
      question.appendChild(questionTitle);

      questionTitle.style.display = 'block';
      questionTitle.style.marginBottom = '15px';

      for (var j = 1; j < 4; j++) {
        j = j++;
        var answer = document.createElement('li');
        answer.classList.add('question' + '-answer');
        question.appendChild(answer);

        answer.style.marginTop = '0px';
        answer.style.marginLeft = '25px';

        var answerLabel = document.createElement('label');
        answerLabel.setAttribute('for', 'check-' + i + j);
        answer.appendChild(answerLabel);

        answerLabel.style.cursor = 'pointer';

        var answerInput = document.createElement('input');
        answerInput.setAttribute('type', 'checkbox');
        answerInput.setAttribute('id', 'check-' + i + j);
        answerLabel.appendChild(answerInput);

        answerInput.style.width = '16px';
        answerInput.style.height = '16px';
        answerInput.style.cursor = 'pointer';

        var answerText = document.createElement('p');
        answerText.innerHTML = ('Вариант ответа №' + j);
        answerLabel.appendChild(answerText);

        answerText.style.display = 'inline-block';
        answerText.style.margin = '5px';
      }
    }
  }
};

objTest.testBox();
objTest.testQuestions();

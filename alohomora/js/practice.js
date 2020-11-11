function displayAnswer1() {
    if (document.getElementById('option-11').checked) {
      document.getElementById('block-11').style.border = '3px solid limegreen'
      document.getElementById('result-11').style.color = 'limegreen'
      document.getElementById('result-11').innerHTML = 'Correct!'
    }
    if (document.getElementById('option-12').checked) {
      document.getElementById('block-12').style.border = '3px solid red'
      document.getElementById('result-12').style.color = 'red'
      document.getElementById('result-12').innerHTML = 'Incorrect!'
      showCorrectAnswer1()
    }
    if (document.getElementById('option-13').checked) {
      document.getElementById('block-13').style.border = '3px solid red'
      document.getElementById('result-13').style.color = 'red'
      document.getElementById('result-13').innerHTML = 'Incorrect!'
      showCorrectAnswer1()
    }
    if (document.getElementById('option-14').checked) {
      document.getElementById('block-14').style.border = '3px solid red'
      document.getElementById('result-14').style.color = 'red'
      document.getElementById('result-14').innerHTML = 'Incorrect!'
      showCorrectAnswer1()
    }
}

   function showCorrectAnswer1() {
    let showAnswer1 = document.createElement('p')
    showAnswer1.innerHTML = 'Show Corrent Answer'
    showAnswer1.style.position = 'relative'
    showAnswer1.style.top = '-180px'
    showAnswer1.style.fontSize = '1.75rem'
    document.getElementById('showanswer1').appendChild(showAnswer1)
    showAnswer1.addEventListener('click', () => {
      document.getElementById('block-11').style.border = '3px solid limegreen'
      document.getElementById('result-11').style.color = 'limegreen'
      document.getElementById('result-11').innerHTML = 'Correct!'
      document.getElementById('showanswer1').removeChild(showAnswer1)
    })
  }

  function displayAnswer2() {
    if (document.getElementById('option-24').checked) {
      document.getElementById('block-24').style.border = '3px solid limegreen'
      document.getElementById('result-24').style.color = 'limegreen'
      document.getElementById('result-24').innerHTML = 'Correct!'
    }
    if (document.getElementById('option-22').checked) {
      document.getElementById('block-22').style.border = '3px solid red'
      document.getElementById('result-22').style.color = 'red'
      document.getElementById('result-22').innerHTML = 'Incorrect!'
      showCorrectAnswer2()
    }
    if (document.getElementById('option-23').checked) {
      document.getElementById('block-23').style.border = '3px solid red'
      document.getElementById('result-23').style.color = 'red'
      document.getElementById('result-23').innerHTML = 'Incorrect!'
      showCorrectAnswer2()
    }
    if (document.getElementById('option-21').checked) {
      document.getElementById('block-21').style.border = '3px solid red'
      document.getElementById('result-21').style.color = 'red'
      document.getElementById('result-21').innerHTML = 'Incorrect!'
      showCorrectAnswer2()
    }
}


  // the functon displays the link to the correct answer
  function showCorrectAnswer2() {
    let showAnswer2 = document.createElement('p')
    showAnswer2.innerHTML = 'Show Corrent Answer'
    showAnswer2.style.position = 'relative'
    showAnswer2.style.top = '-180px'
    showAnswer2.style.fontSize = '1.75rem'
    document.getElementById('showanswer2').appendChild(showAnswer2)
    showAnswer1.addEventListener('click', () => {
      document.getElementById('block-24').style.border = '3px solid limegreen'
      document.getElementById('result-24').style.color = 'limegreen'
      document.getElementById('result-24').innerHTML = 'Correct!'
      document.getElementById('showanswer2').removeChild(showAnswer2)
    })
  }


  function displayAnswer3() {
    if (document.getElementById('option-33').checked) {
      document.getElementById('block-33').style.border = '3px solid limegreen'
      document.getElementById('result-33').style.color = 'limegreen'
      document.getElementById('result-33').innerHTML = 'Correct!'
    }
    if (document.getElementById('option-32').checked) {
      document.getElementById('block-32').style.border = '3px solid red'
      document.getElementById('result-32').style.color = 'red'
      document.getElementById('result-32').innerHTML = 'Incorrect!'
      showCorrectAnswer3()
    }
    if (document.getElementById('option-34').checked) {
      document.getElementById('block-34').style.border = '3px solid red'
      document.getElementById('result-34').style.color = 'red'
      document.getElementById('result-34').innerHTML = 'Incorrect!'
      showCorrectAnswer3()
    }
    if (document.getElementById('option-31').checked) {
      document.getElementById('block-31').style.border = '3px solid red'
      document.getElementById('result-31').style.color = 'red'
      document.getElementById('result-31').innerHTML = 'Incorrect!'
      showCorrectAnswer3()
    }
}


  // the functon displays the link to the correct answer
  function showCorrectAnswer3() {
    let showAnswer3 = document.createElement('p')
    showAnswer3.innerHTML = 'Show Corrent Answer'
    showAnswer3.style.position = 'relative'
    showAnswer3.style.top = '-180px'
    showAnswer3.style.fontSize = '1.75rem'
    document.getElementById('showanswer3').appendChild(showAnswer3)
    showAnswer1.addEventListener('click', () => {
      document.getElementById('block-33').style.border = '3px solid limegreen'
      document.getElementById('result-33').style.color = 'limegreen'
      document.getElementById('result-33').innerHTML = 'Correct!'
      document.getElementById('showanswer3').removeChild(showAnswer3)
    })
  }

  
  function displayAnswer4() {
    if (document.getElementById('option-42').checked) {
      document.getElementById('block-42').style.border = '3px solid limegreen'
      document.getElementById('result-42').style.color = 'limegreen'
      document.getElementById('result-42').innerHTML = 'Correct!'
    }
    if (document.getElementById('option-44').checked) {
      document.getElementById('block-44').style.border = '3px solid red'
      document.getElementById('result-44').style.color = 'red'
      document.getElementById('result-44').innerHTML = 'Incorrect!'
      showCorrectAnswer4()
    }
    if (document.getElementById('option-43').checked) {
      document.getElementById('block-43').style.border = '3px solid red'
      document.getElementById('result-43').style.color = 'red'
      document.getElementById('result-43').innerHTML = 'Incorrect!'
      showCorrectAnswer4()
    }
    if (document.getElementById('option-41').checked) {
      document.getElementById('block-41').style.border = '3px solid red'
      document.getElementById('result-41').style.color = 'red'
      document.getElementById('result-41').innerHTML = 'Incorrect!'
      showCorrectAnswer4()
    }
}


  // the functon displays the link to the correct answer
  function showCorrectAnswer4() {
    let showAnswer4 = document.createElement('p')
    showAnswer4.innerHTML = 'Show Corrent Answer'
    showAnswer4.style.position = 'relative'
    showAnswer4.style.top = '-180px'
    showAnswer4.style.fontSize = '1.75rem'
    document.getElementById('showanswer4').appendChild(showAnswer4)
    showAnswer1.addEventListener('click', () => {
      document.getElementById('block-42').style.border = '3px solid limegreen'
      document.getElementById('result-42').style.color = 'limegreen'
      document.getElementById('result-42').innerHTML = 'Correct!'
      document.getElementById('showanswer4').removeChild(showAnswer4)
    })
  }

  function displayAnswer5() {
    if (document.getElementById('option-51').checked) {
      document.getElementById('block-51').style.border = '3px solid limegreen'
      document.getElementById('result-51').style.color = 'limegreen'
      document.getElementById('result-51').innerHTML = 'Correct!'
    }
    if (document.getElementById('option-52').checked) {
      document.getElementById('block-52').style.border = '3px solid red'
      document.getElementById('result-52').style.color = 'red'
      document.getElementById('result-52').innerHTML = 'Incorrect!'
      showCorrectAnswer5()
    }
    if (document.getElementById('option-53').checked) {
      document.getElementById('block-53').style.border = '3px solid red'
      document.getElementById('result-53').style.color = 'red'
      document.getElementById('result-53').innerHTML = 'Incorrect!'
      showCorrectAnswer5()
    }
    if (document.getElementById('option-54').checked) {
      document.getElementById('block-54').style.border = '3px solid red'
      document.getElementById('result-54').style.color = 'red'
      document.getElementById('result-54').innerHTML = 'Incorrect!'
      showCorrectAnswer5()
    }
}

   function showCorrectAnswer5() {
    let showAnswer5 = document.createElement('p')
    showAnswer5.innerHTML = 'Show Corrent Answer'
    showAnswer5.style.position = 'relative'
    showAnswer5.style.top = '-180px'
    showAnswer5.style.fontSize = '1.75rem'
    document.getElementById('showanswer5').appendChild(showAnswer5)
    showAnswer1.addEventListener('click', () => {
      document.getElementById('block-51').style.border = '3px solid limegreen'
      document.getElementById('result-51').style.color = 'limegreen'
      document.getElementById('result-51').innerHTML = 'Correct!'
      document.getElementById('showanswer5').removeChild(showAnswer5)
    })
  }

import React, { useState } from 'react'
import './App.css'

function App() {
  const [figure, setFigure] = useState("")
  const [figureOutput, setFigureOutput] = useState("")

  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [result, setResult] = useState("")

  const [chooseRes, setChooseRes] = useState([])

  const [changeColor, setChangeColor] = useState("")

  const [emailInput, setEmailInput] = useState("")
  const [answer, setAnswer] = useState("")

  const [inputOne, setInputOne] = useState("")
  const [inputTwo, setInputTwo] = useState("")

  const [toDo, setToDo] = useState("")
  const [task, setTask] = useState([])

  function validateOne() {
    if (!figure || figure.trim() === '') {
      alert("Biror bir raqam kiritishingiz kerak!")
      return false
    }

    return true
  }

  function resOutput() {
    switch (Number(figure)) {
      case 3:
        setFigureOutput("Uchburchak")
        break;

      case 4:
        setFigureOutput("To'rtburchak")
        break;

      case 5:
        setFigureOutput("Beshburchak")
        break;
      default:
        setFigureOutput("Bunday shakl mavjud emas")
        break;
    }
  }

  function validate() {
    if (!password) {
      alert("Inputlarni ikkalasi ham bir hil bo'lishi kerak!")
      return false
    }
    if (!confirm) {
      alert("Inputlarni ikkalasi ham bir hil bo'lishi kerak!")
      return false
    }
    return true
  }

  function outputWindow(event) {
    event.preventDefault();
    let isValid = validate()
    if (!isValid) {
      return
    }

    if (password == confirm) {
      setResult("Password va Confirm mos keldi!")
    } else {
      setResult("Password va Confirm mos kelmadi!")
    }
  }

  function checkedFruits(e, fruits) {
    if (e.target.checked) {
      setChooseRes((prev) => [...prev, fruits])
    } else {
      setChooseRes((prev) => prev.filter((item) => item !== fruits))
    }
  }

  function validateTwo() {
    if (!emailInput) {
      alert('Email kiritishingiz kerak!')
      return false
    }

    return true
  }

  function answerTwo(event) {
    event.preventDefault()

    let isValid = validateTwo()
    if (!isValid) {
      return
    }

    if (emailInput.endsWith("@gmail.com")) {
      setAnswer("Email to'g'ri kiritildi!")
    } else {
      setAnswer("Email to'g'ri kiritilmadi!")
    }

    setEmailInput("")
  }

  function validateThree() {
    if (!inputOne) {
      alert("Birinchi Inputni kiriting!")
      return false
    }

    if (!inputTwo) {
      alert("Ikkinchi Inputni kiriting!")
      return false
    }

    return true
  }

  function output(event) {
    event.preventDefault()

    let isValid = validateThree()
    if (!isValid) {
      return
    }

    let change = inputOne
    setInputOne(inputTwo)
    setInputTwo(change)
  }

  function validateSeven() {
    if (!toDo) {
      alert("Inputga biror bir qiymat berishingiz kerak!");
      return false;
    }

    if (toDo.length < 3) {
      alert("Input eng kamida 3 ta belgi bo'lishi kerak!");
      return false;
    }

    return true;
  }

  function outputWindowTwo(event) {
    event.preventDefault();

    let isValid = validateSeven();
    if (!isValid) {
      return;
    }

    let taskTwo = { toDo };
    setTask([...task, taskTwo]);
    setToDo("");
  }

  return (
    <div className="container">
      <div className="formOne">
        <h2>1. Shaklni aniqlash</h2>
        <label htmlFor="figure">Biror bir shakl burchagini kiriting!</label>
        <input value={figure} onChange={(e) => setFigure(e.target.value)} id='figure' type="number" />
        <button onClick={() => {
          if (validateOne()) {
            resOutput()
          } else {
            setFigureOutput('')
          }
        }} className='btnOne'>Submit</button>
        <label htmlFor="resOne">Natija:</label>
        <textarea value={figureOutput} id="resOne"></textarea>
      </div>

      <form className="formTwo" onSubmit={outputWindow}>
        <h2>2. Parol tekshirish formasi</h2>
        <label htmlFor="passwordOne">Password:</label>
        <input value={password} id='passwordOne' onChange={(e) => setPassword(e.target.value)} type="password" />
        <label htmlFor="passwordTwo">Confirm Password:</label>
        <input value={confirm} id='passwordTwo' onChange={(e) => setConfirm(e.target.value)} type="password" />
        <button type='submit' className="btnTwo">Submit</button>
        <label htmlFor="resTwo">Natija:</label>
        <textarea value={result} id="resTwo"></textarea>
      </form>

      <form className="formThree">
        <h2>3. Chek qutisi (Checkbox) bilan ro’yxat tuzish</h2>
        <h5>Hohlagan Checkboxlarni tanlashingiz mumkin</h5>

        <div className="checkboxs">
          <label htmlFor="olma">
            <input onChange={(e) => checkedFruits(e, "Olma")} id="olma" type="checkbox" />
            Olma
          </label>

          <label htmlFor="banan">
            <input onChange={(e) => checkedFruits(e, "Banan")} id="banan" type="checkbox" />
            Banan
          </label>

          <label htmlFor="gilos">
            <input onChange={(e) => checkedFruits(e, "Gilos")} id="gilos" type="checkbox" />
            Gilos
          </label>

          <label htmlFor="Behi">
            <input onChange={(e) => checkedFruits(e, "Behi")} id="behi" type="checkbox" />
            Behi
          </label>

          <label htmlFor="qulupnay">
            <input onChange={(e) => checkedFruits(e, "Qulupnay")} id="qulubnay" type="checkbox" />
            Qulupnay
          </label>

          <label htmlFor="shaftoli">
            <input onChange={(e) => checkedFruits(e, "Shaftoli")} id="shaftoli" type="checkbox" />
            Shaftoli
          </label>

          <div className="result">
            <label htmlFor="res">Natija:</label>
            <textarea value={chooseRes} id="res"></textarea>
          </div>
        </div>
      </form>

      <form className="formFour">
        <h2>4. Foydalanuvchining tanlovi bo’yicha rang o’zgartirish</h2>

        <h5>Ranglardan birini tanlang:</h5>

        <div className="chexboxss">
          <label htmlFor="qizil">
            <input onChange={() => setChangeColor("red")} name='color' id='qizil' type="radio" />
            Qizil
          </label>

          <label htmlFor="orange">
            <input onChange={() => setChangeColor("orange")} name='color' id='orange' type="radio" />
            Olovrang
          </label>

          <label htmlFor="qora">
            <input onChange={() => setChangeColor("black")} name='color' id='qora' type="radio" />
            Qora
          </label>

          <label htmlFor="pushti">
            <input onChange={() => setChangeColor("pink")} name='color' id='pushti' type="radio" />
            Pushti
          </label>

          <label htmlFor="yashil">
            <input onChange={() => setChangeColor("green")} name='color' id='yashil' type="radio" />
            Yashil
          </label>

          <label htmlFor="sariq">
            <input onChange={() => setChangeColor("yellow")} name='color' id='sariq' type="radio" />
            Sariq
          </label>
        </div>

        <div style={{ backgroundColor: changeColor }} className="box"></div>
      </form>

      <form className="formFive">
        <h2>5. To'g'ri email kiritish tekshiruvi</h2>

        <label htmlFor="email">Email Address kiriting!</label>
        <input value={emailInput} onChange={(e) => setEmailInput(e.target.value)} id='email' type="email" />

        <button onClick={answerTwo} type='submit' className='submit'>Submit</button>

        <label htmlFor="result">Natija:</label>
        <textarea value={answer} id="result"></textarea>
      </form>

      <form className="formSix">
        <h2>6. Ikkita input qiymatini almashtirish</h2>

        <label htmlFor="inputOne">Birinchi Input:</label>
        <input value={inputOne} onChange={(e) => setInputOne(e.target.value)} id='inputOne' type="text" />

        <label htmlFor="inputTwo">Ikkinchi Input:</label>
        <input value={inputTwo} onChange={(e) => setInputTwo(e.target.value)} id='inputTwo' type="text" />

        <button onClick={output} type='submit' className="btnSix">Change Input</button>
      </form>

      <div className="formSeven">
        <h2>7. To-do ro'yxat yaratish</h2>

        <form onSubmit={outputWindowTwo}>
          <label htmlFor="enterToDo">To Do uchun biror narsa kiriting:</label>
          <input
            value={toDo}
            onChange={(e) => setToDo(e.target.value)}
            id="enterToDo"
            type="text"
          />
          <button type="submit" className="btnSeven">
            Qo'shish
          </button>
        </form>

        <div className="tasks">
          {task.map((e, index) => (
            <div key={index} className="task">
              <p>{e.toDo}</p>
              <button type='submit' onClick={() => {
                  if (window.confirm("Rostdan ham o'chirmoqchimisiz?")) {
                    setTask(prevTask => prevTask.filter((_, i) => i !== index));
                  }
                }}
                className="btnSevenTwo"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App

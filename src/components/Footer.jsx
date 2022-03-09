function Footer() {
  const startQuiz = () => {
    setTimeout(function () {
      console.log(5);
    }, 1000);
    setTimeout(function () {
      console.log(4);
    }, 2000);
    setTimeout(function () {
      console.log(3);
    }, 3000);
    setTimeout(function () {
      console.log(2);
    }, 4500);
    setTimeout(function () {
      console.log(1);
    }, 5000);
    setTimeout(function () {
      console.log("Started Quiz! 🏁");
    }, 5500);
  };

  return (
    <div className="footer">
      <a href="#quiz" onClick={startQuiz} className="quiz-btn" rel="noreferrer">
        Start Quiz
      </a>
      {/* <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noreferrer">Read more about React</a> */}
    </div>
  );
}

export default Footer;

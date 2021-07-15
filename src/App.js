import './App.scss';

function App() {

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.value)
  }
  
  return (
    <form className="start" onChange={handleSubmit}>
      <div className="start__item flex-column">
        <span className="start__item--title">Select Category:</span>
        <select className="start__item--select">
          <option>Category</option>
          <option value="21">Sports</option>
          <option value="24">politics</option>
        </select>
      </div>

      <div className="start__item flex-column">
        <span className="start__item--title">Select Difficulty:</span>
        <select className="start__item--select">
          <option>Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <input type="submit" value="START" className="btn" />
    </form>
  );
}

export default App;

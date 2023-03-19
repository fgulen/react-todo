import './App.css';

function App() {

  // const [todo, setTodo] = useState("");

  // function getValue(e){
  //   setTodo(e.target.value)
  // };


  return (
    <div className="todo">
      <div className="wrapper">
        <div className="heading">
          <h1>Hi! I’m To Do List done!</h1>
        </div>
        <div className="input-container">
          <input type="text"
            name='text'
            value=""
            onChange="{getValue}"
            className="input"
          />
          <button className="add-btn">Add</button>
        </div>
        <div className="tasks">
          <h3 className='task-todo'>task 1</h3>
          <button className="update btn">Update</button>
          <button className="delete btn">Delete</button>
        </div>
        <div className="footer">
          <hr />
        </div>
      </div>
    </div>
  );
}

export default App;

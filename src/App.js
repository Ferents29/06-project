import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import MySelect from "./components/UI/MySelect";

function App() {
    const [todos, setTodos] = useState([
        {id:1,title:'Python',body:'Language programming',done:'false',important:'false',},
        {id:2,title:'React',body:'Library',done:'false',important:'false',},
        {id:3,title:'C++',body:'Language programming',done:'false',important:'false',},
        {id:4,title:'HTML & CSS',body:'Verstka',done:'false',important:'false',},
        {id:5,title:'Java',body:'Language programming',done:'false',important:'false',},
    ])
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [selectedSort,setSelectedSort] = useState('')

    const addNewTodos = (e) => {
        e.preventDefault()
        const newTodo = {
            id:Date.now(),
            title:title,
            body:body,
        }
        setTodos([...todos,newTodo])
    }

    const doneTodo = (id) => {
        let newTodos = [...todos].filter(elem => {
            if (elem.done === 'false'){
                if(elem.id === id) {
                    elem.done = 'true'
                }
            }
            else if (elem.done === 'true'){
                if(elem.id === id) {
                    elem.done = 'false'
                }
            }
            return elem
        })
        setTodos(newTodos)
    }
    const importantTodo = (id) => {
        let newTodos = [...todos].filter(elem => {
            if (elem.important === 'false'){
                if(elem.id === id) {
                    elem.important = 'true'
                }
            }
            else if (elem.important === 'true'){
                if(elem.id === id) {
                    elem.important = 'false'
                }
            }
            return elem
        })
        setTodos(newTodos)
    }
    const sortTodos = (sort) => {
        setSelectedSort(sort)
        setTodos([...todos].sort((a,b) => a[sort].localeCompare(b[sort])))
    }

  return (
      <div className="App">
          <MySelect defaultValue={'???????????????????? ????: '}
                    options={[
              {value:'title',name:'???? ????????????????',},
              {value:'body',name:'???? ????????????????',},
              {value:'done',name:'???????????????? / ???? ????????????????',},
              {value:'important',name:'???????????? / ???? ????????????',},
                    ]}
                    value={selectedSort}
                    onChange={sortTodos}/>
          <form>
              <input type={'text'} onChange={e => setTitle(e.target.value)} value={title} placeholder={'???????????????? ??????????????'}/><br/><br/>
              <input type={'text'} onChange={e => setBody(e.target.value)} value={body} placeholder={'???????????????? ??????????????'}/><br/><br/>
              <button onClick={addNewTodos}>???????????????? ??????????????</button>
          </form>

          {todos.map(todo =>
              <div style={{border:'3px solid red', width:'50%', margin: 10,}}>
                  <div>{todo.title}</div>
                  <div>{todo.body}</div>

                  {todo.done === 'true'
                      ? <span style={{backgroundColor: 'yellow'}}>?????????????? ??????????????????</span>
                      : <span style={{backgroundColor: 'red'}}>?????????????? ???? ??????????????????</span>
                  }
                  <input type={'checkbox'}
                         onClick={() => doneTodo(todo.id)}
                         value={todo.done} /><span>?????????????????? / ???? ??????????????????</span><br/>
                  {todo.important === 'true'
                      ? <span style={{backgroundColor: 'yellow'}}>?????????????? ????????????</span>
                      : <span style={{backgroundColor: 'red'}}>?????????????? ???? ????????????</span>
                  }
                  <input type={'checkbox'}
                         onClick={() => importantTodo(todo.id)}
                         value={todo.important}/><span>???????????? / ???? ????????????</span>
              </div>
          )}
      </div>
  );
}

export default App;

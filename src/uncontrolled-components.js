import './App.css';

const submit = (e) => {
  e.preventDefault()
  const data = Array.from (new FormData (e.target))
  console.log(Object.fromEntries(data))
}

function App() {
  return (
    <form onSubmit={submit}>
      <div>
        <span>
          Bapheles
        </span>
        <input name='campo' />
      </div>
      <input name='campo2' />
      <input type='submit' value='Enviar' />
    </form>
  );
}

export default App;

import React from 'react'
function Greeting({initialName = ''}) {
  console.log('rendering')

  function getInitialNameValue() {
    console.log('Get initial value')

    return window.localStorage.getItem('name') || initialName
  }

  const [name, setName] = React.useState(getInitialNameValue)

  React.useEffect(() => {
    window.localStorage.setItem('name', name)
  }, [name])

  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  //3. make the function accept an initial value
  return <Greeting initialName="Georgie" />
  // return <Greeting initialName="Jude x" />
}

export default App

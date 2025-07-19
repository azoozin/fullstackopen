import { useState } from 'react'
import Statistics from './components/Statistics'
import Button from './components/Button'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <section>
        <h1>give feedback</h1>

        <Button onClick={() => {setGood(good + 1)}} btnText={"good"} />
        <Button onClick={() => {setNeutral(neutral + 1)}} btnText={"neutral"} />
        <Button onClick={() => {setBad(bad + 1)}} btnText={"bad"} />
      </section>

      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App;
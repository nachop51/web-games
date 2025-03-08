import GuessTheHexPage from '@/pages/guess-the-hex'
import Navbar from './navbar'
import { Route, Switch } from 'wouter'

export default function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route path="/" component={() => <h1>hsad</h1>} />
        <Route path="/colorhexle" component={GuessTheHexPage} />
        <Route path="/guess-the-color" component={GuessTheHexPage} />
      </Switch>
    </>
  )
}

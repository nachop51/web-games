import GuessTheHexPage from '@/pages/colorhexle/page'
import Navbar from './navbar'
import { Route, Switch } from 'wouter'
import Page from '@/pages/page'

export default function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route path="/" component={Page} />
        <Route path="/colorhexle" component={GuessTheHexPage} />
        <Route path="/guess-the-color" component={GuessTheHexPage} />
        <Route path="*" component={() => '404'} />
      </Switch>
    </>
  )
}

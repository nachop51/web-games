import GuessTheHexPage from '@/pages/colorhexle/page'
import GuessTheColorPage from '@/pages/guess-the-color/page'
import { Route, Switch } from 'wouter'
import Page from '@/pages/page'

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Page} />
        <Route path="/colorhexle" component={GuessTheHexPage} />
        <Route path="/guess-the-color" component={GuessTheColorPage} />
        <Route path="*" component={() => '404'} />
      </Switch>
    </>
  )
}

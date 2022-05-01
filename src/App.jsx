import Topbar from './components/topbar/Topbar';
import Homepage from './pages/homepage/Homepage';
import Single from './pages/single/Single';
import Reference from './pages/reference/Reference';
import Quiz from './pages/quiz/Quiz';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './shared.css';

const data = [
  {
    title: 'Vehicular Emissions Quiz',
    image: 'https://media.istockphoto.com/photos/optical-form-of-an-examination-with-pencil-picture-id524069563?k=20&m=524069563&s=612x612&w=0&h=8XNQsZvit-djUXfho635QLTnlMpMSFLR2zi60HMggVU=',
    content: 'Check your understanding by answering some multiple-choice questions.',
    link: '/quiz',
  },
  {
    title: 'Why is vehicular transmission a unique problem?',
    // image: 'https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    image: 'https://images.pexels.com/photos/6758029/pexels-photo-6758029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    link: '/post/1',
    content: 'c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1',
  },
  {
    title: 'Why bay area people?',
    image: 'https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    link: '/post/2',
    content: 'c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1',
  },
  {
    title: 'Facts about the carbon footprints',
    image: 'https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    link: '/post/3',
    content: 'c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1',
  },
  {
    title: 'q4',
    image: 'https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    link: '/post/4',
    content: 'c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1',
  },
]

export default function App() {
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path='/'>
          <Homepage data={data}/>
        </Route>
        <Route path='/homepage'>
          <Homepage data={data}/>
        </Route>
        <Route path='/posts'>
          <Homepage data={data}/>
        </Route>
        <Route path='/post/:id'>
          <Single data={data}/>
        </Route>
        <Route path='/references'>
          <Reference />
        </Route>
        <Route path='/quiz'>
          <Quiz />
        </Route>
      </Switch>
    </Router>
  );
}

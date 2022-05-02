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
    content: ['Check your understanding by answering some multiple-choice questions.'],
    link: '/quiz',
  },
  {
    title: 'One Thing We Can Do: Drive Less',
    image: 'https://images.pexels.com/photos/6758029/pexels-photo-6758029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    content: ['Even driving just 10 percent less would have a big impact on greenhouse gas emissions.', 'Transit, an app that aggregates bus, train, bike-share and other alternatives to show you transportation options, helps users find ways to travel that don’t involve a car.'],
    link: 'https://www.nytimes.com/2019/08/28/climate/one-thing-we-can-do-drive-less.html'
  },
  {
    title: 'What You Can Do to Reduce Pollution from Vehicles and Engines',
    image: 'https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    content: ['Walk or bike when you can.',  
              'Use the bike-share programs if your city or town has them.',
              'Take public transit when possible.',
              'Drive efficiently – go easy on the gas pedal and brakes.',
              'Maintain your car – get regular tune-ups, follow the manufacturer’s maintenance schedule, and use the recommended motor oil.'
      ],
    link: 'https://www.epa.gov/transportation-air-pollution-and-climate-change/what-you-can-do-reduce-pollution-vehicles-and'
  },
  {
    title: 'How to Drive Less',
    image: 'https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    content: ['Using Alternative Forms of Transportation such as bike, walk, and public transportation',
              'Combine errands and trips when you need to drive somewhere.',
              'Park in the first space that you find when you arrive at your destination.'],
    link: 'https://www.wikihow.com/Drive-Less'
  },
  {
    title: 'Carbon Footprint: Why Must we Care?',
    image: 'https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    content: ['Carbon footprint has caused rising Earth’s temperature, which has generated much interests and uproars of concerns about the warning of global climate.'],
    link: 'https://medium.com/evironmental-issuess/carbon-footprint-why-must-we-care-d8c2d39395'
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

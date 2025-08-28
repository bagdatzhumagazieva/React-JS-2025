import { useState, unstable_Activity as Activity } from 'react';
import Header from './components/Header.jsx';
import StoryTray from './StoryTray.jsx';

let initialStories = [
  {id: 0, label: "Ankit's Story" },
  {id: 1, label: "Taylor's Story" },
];

export default function App() {
  let [stories, setStories] = useState(initialStories)

  return (
   <>
   <Header/>
   </>
  );
}

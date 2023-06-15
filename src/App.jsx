  // import { useState } from 'react'
  // import reactLogo from './assets/react.svg'
  // import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components/Hello'
import Message from './components/Message'
import Profile from './components/profile';
function Clock () {
    return (
        <div className="App">
             <Hello />
             <Message />
             <Profile name = "John" lastName = "doe" />
             <Profile name = "Talib" lastName = "mishu" />
        </div>
    );
}

export default Clock

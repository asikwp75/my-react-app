  // import { useState } from 'react'
  // import reactLogo from './assets/react.svg'
  // import viteLogo from '/vite.svg'
import './App.css'



function Clock () {
    return (
       <h1   className = 'heading'>
       <span className = 'text'>Hello {new Date(). toLocaleTimeString()}</span>
       </h1>
    );
}


// export default < Clock locale="bn-BD" />

export default Clock

import { useState } from "react";
import './App.css'

function App() {
  const [count, setCount] = useState(0);
return <div>Hello World
  <div>
<h2>Title</h2>
<p>This is the content</p>
  </div>
  <button onClick={()=>{
    setCount (count + 1);
  }}>
    count: {count}
  </button>
</div>
}

export default App

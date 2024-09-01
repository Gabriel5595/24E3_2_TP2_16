import { createRoot } from 'react-dom/client'
import Home from "./pages/home"

import "./styles.css"

createRoot(document.getElementById('root')).render(
    <div>
      <Home />
    </div>
)

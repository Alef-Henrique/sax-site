import React from "react"
import { createRoot } from "react-dom/client"
import AppRoutes from "./routes/AppRoutes.jsx"

import "./styles/global.css"
import "./styles/events.css"
import "./styles/responsive.css"
import "./styles/repertoire.css"

createRoot(document.getElementById("root")).render(

 <React.StrictMode>

<AppRoutes />

 </React.StrictMode>

)

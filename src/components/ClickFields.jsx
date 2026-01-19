import { useEffect, useRef } from "react"

const ClickFields = () => {
        const inputref = useRef(null)
        
        useEffect(() => {
          inputref.current = setInterval(() => {
            console.log("Timer running");
            
          }, 1000)
        
          return () => {
            clearInterval(inputref.current)
          }
        }, [])
        
    return <p>Click the console for timer output...</p>
}

export default ClickFields
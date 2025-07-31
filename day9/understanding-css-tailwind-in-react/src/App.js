// external css
import './index.css'
import{AddingTailwind} from './AddingTailwind';
function App() {
    return (
        <div>
          {/* internal css*/}
          <style>
            {`p {
             color: red;
            }`}
          </style>
          {/* inline css */}
            <h1 style={{ color: "blue" }}>my react is working</h1>
            <p>this is my p tag</p>
            <h2>this is my external css</h2>
            <h3>this is my tailwind</h3>
            <AddingTailwind/>
            
        </div>
        
    )
}

export { App };
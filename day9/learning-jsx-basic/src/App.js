import { VariableinJsx } from './VariableinJsx.js'
import { ConditionInJsx } from './ConditionInJsx.js'
import { FunctionInJsx } from './FunctionInJsx.js'
import { RenderList } from './ListRender.js'
function App() {
    return (
        <div>
            {/* inside curly braces we write javascript expression */}
            <p>result = (2+5)</p>
            <VariableinJsx/>
            <ConditionInJsx/>
            <FunctionInJsx/>
            <RenderList/>

        </div>
    )
}

export { App }
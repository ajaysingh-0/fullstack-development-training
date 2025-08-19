import { Form } from "react-router-dom";
import { callUpdateAPI, callGetAllAPI } from "./BackendAPI"
function ShowTodoPage(props) {
    let todoArr = props.todo;
    console.log(JSON.stringify(todoArr))

    async function handleClick(e, todoId) {

        await callUpdateAPI('/update-todo', { statis: 'completed', completionDate: new Date() }, { 'todoId': todoId })

        const todolist = await callGetAllAPI('/read-todos');
        props.setTodo(todolist)
    }
    return (
        <div class="bg-purple-200 h-[200px] flex justify-center items-center">
            <table border="1">
                <tr>
                    <th>Todo Title</th>
                    <th>Status</th>
                    <th>Due Date</th>
                    <th>Mark Done</th>
                </tr>
                {
                    todoArr.map((todo, index) => (
                        todo.status == "pending" && (
                            <tr key={todo.todoId}>
                                <td>{todo.todoTitle}</td>
                                <td>{todo.status}</td>
                                <td>{todo.dueDate}</td>
                                <td><button onClick={(e) => handleClick(e, todo.todoId)}>✅</button></td>
                            </tr>
                        )
                    ))
                }

            </table>
        </div>
    )
}

export default ShowTodoPage;
function ShowTodoPage(props) {
    let todoArr = props.todo;

    function handleClick(e, todoId) {
        // delete todo from todoArr where id=todoId
        todoArr = todoArr.filter(todo => todo.id !== todoId);
        props.setTodo(todoArr);
        alert("Todo Completed");
    }

    return (
        <div className="bg-purple-200 min-h-[200px] flex justify-center items-center py-6">
  <table className="table-auto bg-white rounded-md shadow-md border border-gray-300">
    <thead>
      <tr className="bg-purple-400 text-white">
        <th className="px-6 py-3 border border-gray-300">Todo Title</th>
        <th className="px-6 py-3 border border-gray-300">Due Date</th>
        <th className="px-6 py-3 border border-gray-300">Mark Done</th>
      </tr>
    </thead>
    <tbody>
      {todoArr.map((value, index) => (
        <tr key={index} className="text-center hover:bg-purple-100 transition">
          <td className="px-4 py-2 border border-gray-300">{value.todoTitle}</td>
          <td className="px-4 py-2 border border-gray-300">{value.dueDate}</td>
          <td className="px-4 py-2 border border-gray-300">
            <button
              onClick={(e) => handleClick(e, value.id)}
              className="text-green-600 text-xl hover:scale-110 transition"
              title="Mark as Done"
            >
              ✅
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        
    )
}

export default ShowTodoPage;
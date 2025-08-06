import { useState } from 'react'

function AddTodoPage(props) {
  let todo = props.todo;
  let setTodo = props.setTodo;

    let [formData, setFormData] = useState({
        todoTitle: '',
        dueDate: '',
        status: 'pending'
    })

    function handleChange(e) {
        let inputName = e.target.name;
        let inputValue = e.target.value;

        setFormData(prev => ({
            ...prev,
            [inputName]: [inputValue]
        }))
    }

    function handleSubmit(e) {
      // preventDefault function prevent website from reload, because
      e.preventDefault();

        // stringify is function JSON file which take parameter as object/json and return string of it
        alert("form submitted, data = " + JSON.stringify(formData))
    
        //update state
        setTodo(previousTodo => ([
          ...previousTodo,
          {
            "id": Date.mow(),
            "todoTitle": formData.todoTitle,
            "dueDate": formData.DueDate,
            "status": formData.status,
            "completeDate":"",
          }
        ]))
      }


    return (
        <div className="bg-pink-200 min-h-[200px] flex justify-center items-center py-8">
  <form
    onSubmit={(e) => handleSubmit(e)}
    className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4"
  >
    <div className="flex flex-col">
      <label className="mb-1 font-medium text-gray-700">Todo Title</label>
      <input
        type="text"
        placeholder="Enter your todo title"
        name="todoTitle"
        value={formData.todoTitle}
        onChange={(e) => handleChange(e)}
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
    </div>

    <div className="flex flex-col">
      <label className="mb-1 font-medium text-gray-700">Due Date</label>
      <input
        type="date"
        name="dueDate"
        value={formData.dueDate}
        onChange={(e) => handleChange(e)}
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
    </div>

    <button
      type="submit"
      className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition duration-200"
    >
      Submit
    </button>
  </form>
</div>

    )
}

export default AddTodoPage;
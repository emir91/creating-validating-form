import { useState } from "react"
import FromExample from "./FormExample"
import ShowData from "./ShowData"
import "./assets/styles/App.css"

const onSubmit = (v) => alert("Submit value: " + JSON.stringify(v, null, 2))

const App = () => {
  const [formFields, setFormFields] = useState({})
  const [errors, setErrors] = useState({})
  const [valid, setValid] = useState()

  return (
    <div className="app">
      <main>
        <FromExample
          onChange={(ff, v, e) => {
            setFormFields(ff)
            setValid(v)
            setErrors(e)
          }}
          onSubmit={onSubmit}
          initialValue={{
            field1: "Some stuff",
          }}
        />

        <ShowData formFields={formFields} errors={errors} valid={valid} />
      </main>
    </div>
  )
}

export default App

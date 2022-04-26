import React, { useEffect, useState } from "react"
import InputField from "./InputField"
import SimpleForm from "./SimpleForm"

const FormExample = ({ onSubmit, onChange, initialValue = {} }) => {
  const [formFields, setFormFields] = useState(initialValue)

  const [valid, setValid] = useState(true)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (onChange) {
      onChange(formFields, valid, errors)
    }
  }, [onChange, formFields, valid, errors])

  return (
    <div>
      <h1>Single field</h1>

      <SimpleForm
        value={formFields}
        onChange={setFormFields}
        onValid={(v, errs) => {
          setValid(v)
          setErrors(errs)
        }}
      >
        <InputField
          name="field1"
          onValidate={(v) => (!v || v.length < 3 ? "Too short!" : null)}
        />

        <button onClick={() => onSubmit && onSubmit(formFields)}>Submit</button>
      </SimpleForm>
    </div>
  )
}

export default FormExample

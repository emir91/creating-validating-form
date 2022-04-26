import { useContext, useEffect, useState } from "react"
import FormContext from "./FormContext"

import "./assets/styles/InputField.css"

const splitCamelCase = (s) =>
  s
    .replace(/([a-z0-9])([A-Z0-9])/g, "$1 $2")
    .replace(/^([a-z])/, (x) => x.toUpperCase())

const InputField = (props) => {
  const form = useContext(FormContext)

  const [error, setError] = useState("")

  const { onValidate, name, label, ...otherProps } = props

  let value = form.value && form.value(name)

  useEffect(() => {
    if (onValidate) {
      setError(onValidate(value))
    }
  }, [onValidate, value])

  const setInvalid = form.setInvalid

  useEffect(() => {
    if (setInvalid) {
      setInvalid(value, error)
    }
  }, [setInvalid, value, error])

  if (!form.value) {
    return "InputField should be wrapped in a form"
  }

  return (
    <div className="input-field">
      <label htmlFor={name}>{label || splitCamelCase(name)}:</label>
      <input
        id={name}
        onBlur={() => form.setDirty(name)}
        value={value || ""}
        onChange={(e) => {
          form.setDirty(name)
          form.setValue(name, e.target.value)
        }}
        {...otherProps}
      />{" "}
      {
        <div className="input-field-error">
          {form.isDirty(name) && error ? error : <>&nbsp;</>}
        </div>
      }
    </div>
  )
}

export default InputField

import React from "react"
import "./assets/styles/ShowData.css"

const ShowData = ({ formFields, valid, errors }) => {
  return (
    <div className="show-data">
      <dl>
        <dt>Current value:</dt>
        <dd>{JSON.stringify(formFields, null, 2)}</dd>
        <dt>Valid?</dt>
        <dd>{JSON.stringify(valid, null, 2)}</dd>
        <dt>Errors</dt>
        <dd>{JSON.stringify(errors, null, 2)}</dd>
      </dl>
    </div>
  )
}

export default ShowData

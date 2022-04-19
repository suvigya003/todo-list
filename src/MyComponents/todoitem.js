import React from 'react'

export default function todo({tilt,onDelete}) {
  return (
    <>
    <div>
      <h4>{tilt.title}</h4>
      <p>{tilt.desc}</p>
      <button type="button" className="btn btn-sm btn-danger" onClick={() => { onDelete(tilt) }}>Delete</button>
      </div>
      <hr />
      </>
  )
}

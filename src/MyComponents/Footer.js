import React from 'react'
// create boiler plate using rfc and enter
export default function footer() {
  // Add styles like this 
  let footerStyle = {
    position: "relative",
    top: "93vh",
    width: "100%",
  }
  return (
    <footer className="bg-dark text-light py-3"  style={footerStyle}>
      <p className="text-center">
        Copyright &copy; Suvigya Tripathi
</p>
    </footer>
  )
}


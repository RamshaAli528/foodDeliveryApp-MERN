import React from 'react'

export default function Card() {
  return (
    <div>
    <div class="card text-white bg-dark mt-3" style={{ "width": "18rem", "maxHeight": "400px" }}>
        <div className="card-img" style={{"height": "225px"}}>
        <img src="https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVyZ2VyfGVufDB8fDB8fHww" class="card-img-top" alt="..." style={{"height":"100%","width":"100%","objectFit":"cover"}} />

        </div>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up.</p>
        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
        <div className="container w-100">
          <select className='rounded m-2 h-100  bg-danger'>
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1}>{i + 1}</option>
              )
            })
            }
          </select>
          <select className='rounded m-2 h-100 bg-danger'>
                <option  value="1">Half</option>
                <option  value="2">Full</option>
          </select>
          <div className="d-inline h-100 fs-5">
            Total Price
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

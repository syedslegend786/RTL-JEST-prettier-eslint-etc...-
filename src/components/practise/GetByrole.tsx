import React from "react"

const GetByrole = () => {
  return (
    <div>
      <div>
        <label htmlFor="username">Username</label>
        <input type={"text"} name="username" id="username" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type={"text"} name="password" id="password" />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          placeholder="Description"
          name="description"
          id="description"
        />
      </div>
      <select>
        <option>Select country</option>
        <option>Pakistan</option>
        <option>India</option>
      </select>
      <div>
        <label htmlFor="rememberMe">Remember me</label>
        <input type={"checkbox"} name="rememberMe" id="rememberMe" />
      </div>
      <p>All fields are mendatery</p>
      <img
        src="https://avatars.githubusercontent.com/u/70067?s=48&v=4"
        alt="avatar"
      />
    </div>
  )
}

export default GetByrole

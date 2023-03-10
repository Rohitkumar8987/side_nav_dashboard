import React from "react";
// import "./Customers.css"

export default function Customers() {
  return (
    <div className="container">
    <form action="">
      <h1>Customer Information</h1>
      <div className="content">
        <div className="input-box">
          <label for="name">First Name</label>
          <input type="text" placeholder="" />
        </div>
        <div className="input-box">
          <label for="name">Last Name</label>
          <input type="text" placeholder="" />
        </div>
        <div className="input-box">
          <label for="name">Phone</label>
          <input type="text" placeholder="" />
        </div>
        <div className="input-box">
          <label for="name">Email</label>
          <input type="text" placeholder="" />
        </div>
        <div className="input-box">
          <label for="name">Address</label>
          <input type="text" placeholder="" />
        </div>
        <div className="input-box">
          <label for="name">City</label>
          <input type="text" placeholder="" />
        </div>
        <div className="input-box">
          <label for="name">State</label>
          <input type="text" placeholder="" />
        </div>
        <div className="input-box">
          <label for="name">Zip Code</label>
          <input type="text" placeholder="" />
        </div>
        <div className="input-box">
          <label for="name">Type</label>
          <select name="" id="">
          <option value="">Builder Referred</option>
        </select>
        </div>
        <div className="input-box">
          <label for="name">Builder/Design license#</label>
          <input type="text" placeholder="" />
        </div>
        <div className="input-box">
          <label for="name">Source</label>
          <select name="" id="">
          <option value="">Google</option>
        </select>
         
        </div>
        <div className="input-box">
          <label for="name">Sales Person</label>
          <input type="text" placeholder="" />
        </div>
        <div className="input-box box-text">
          <label for="name">Comments</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
      </div>
      <div className="button-container">
      <div className="btn">
        <button type="submit">Save</button>
        <div className="btn-o">
        <button type="clear:  ">Cancel</button>
        </div>
        </div>
      </div>
    </form>
    
    </div>
    
  );
}

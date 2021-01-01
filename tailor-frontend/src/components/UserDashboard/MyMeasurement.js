import React from "react";

export const MyMeasurement = () => {
  return (
    <div >
        <h2 className="text-center">My Measurement</h2>
        <div className="my__measurement">
            
        
      <div className="form-container">
        {/* strt */}
        <form>
          <label htmlFor="fname">Full length</label>
          <input
            type="text"
            name="firstname"
            placeholder="Your name.."
            //    value={firstName}
            //    onChange={(e) => {
            //      setFirstName(e.target.value);
            //    }}
          />

          <label htmlFor="lname">shoulder</label>
          <input
            type="text"
            name="lastname"
            //    placeholder="Your last name.."
            //    value={lastName}
            // value = {((userData || {}).user || {}).lastName}

            //    onChange={(e) => {
            //      setlastName(e.target.value);
            //    }}
          />
          {/* <label htmlFor="fname">Update Photo</label>
    
           <input value={userImg} type="text" onChange={(e)=>{setUserImg(e.target.value)}}></input> */}

          <label htmlFor="Email">Chest/Brust</label>
          <input
            type="text"
            name="Email"
            placeholder="Email.."
            //    value={email}
            //    // value={((userData || {}).user || {}).email}
            //    onChange={(e) => {
            //      setEmail(e.target.value);
            //    }}
          />

          <label htmlFor="phone number">Sleeve length</label>
          <input
            type="text"
            name="phone number"
            placeholder="Phone number.."
            // value={((userData || {}).user || {}).phoneNumber}
            //    value={phoneNumber}
            //    onChange={(e) => {
            //      setPhoneNumber(e.target.value);
            //    }}
          />

          <label htmlFor="address">Waist Length</label>
          <input
            type="text"
            name="address"
            placeholder="Address.."
            //    value={address}
            // value={((userData || {}).user || {}).address}
            //    onChange={(e) => {
            //      setAddress(e.target.value);
            //    }}
          />

          <label htmlFor="zip code">Neck Measurement</label>
          <input
            type="text"
            name="zip code"
            placeholder="Your last name.."
            // value={((userData || {}).user || {}).zipCode}
            //    onChange={(e) => {
            //      setZipCode(e.target.value);
            //    }}
          />

          <label htmlFor="zip code">Comment/Design/Color</label>
          <input
            type="text"
            name="zip code"
            placeholder="Your last name.."
            // value={((userData || {}).user || {}).zipCode}
            //    onChange={(e) => {
            //      setZipCode(e.target.value);
            //    }}
          />
          {/* {error && <ErrorNotice message={error} clearError={() => { setError(undefined) }} />} */}

          <input type="submit" value="Submit Measurement" />
        </form>

        {/* end */}
      </div>
      <div>
          klfjsdlkfj
      </div>
    </div>
    </div>
  );
};

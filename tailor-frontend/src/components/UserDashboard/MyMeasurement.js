import React, {  useContext, useState } from "react";
import "../../sytles/userMeasurement.css";
import ErrorNotice from "../misc/errorNotices";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "./../../context/GlobalContexts";
import Axios from "axios";


export const MyMeasurement = () => {
  const [  fullLength, setfullLength] = useState();
  const [ shoulder, setshoulder] = useState();
  const [ Chest, setChest] = useState();
  const [ SleeveLength, setSleeveLength] = useState();
  const [  WaistLength, setWaistLength] = useState();
  const [ Neck, setNect] = useState();
  const [ Comment, setComment] = useState();
  const [error, setError] = useState();
  const history = useHistory();

  const { UserData } = useContext(GlobalContext);


  const submitMeasurement = async (e) => {
    e.preventDefault();

    try {
      const userMeasurments = {  fullLength,
        shoulder,
        Chest,
        SleeveLength,
        WaistLength,
        Neck,
        Comment };

        await Axios.post("/users/udashboard/my-measurement/", userMeasurments);
        console.log(userMeasurments)
      
      // setUserData({
      //       measurement:userMeasurementRes.data.measurement
      // });

    
      history.push("/udashboard");

    }
    catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  }


  return (
    <div>
      <h2 className="text-center">My Measurement</h2>
      <div className="my__measurement">
        <div className="form-measurement">
          {/* strt */}
          <form onSubmit = {submitMeasurement}>
            <label htmlFor="fname">Full length</label>
            <input
              type="text"
              name="firstname"
              placeholder="Full length.."
              //    value={firstName}
                 onChange={(e) => {
                   setfullLength(e.target.value);
                 }}
            />

            <label htmlFor="lname">shoulder</label>
            <input
              type="text"
              name="lastname"
              placeholder="Shoulder.."
              //    value={lastName}
              // value = {((userData || {}).user || {}).lastName}

                 onChange={(e) => {
                   setshoulder(e.target.value);
                 }}
            />
            {/* <label htmlFor="fname">Update Photo</label>
    
           <input value={userImg} type="text" onChange={(e)=>{setUserImg(e.target.value)}}></input> */}

            <label htmlFor="Email">Chest/Brust</label>
            <input
              type="text"
              name="Email"
              placeholder="Chest/Brust.."
              //    value={email}
              //    // value={((userData || {}).user || {}).email}
                 onChange={(e) => {
                   setChest(e.target.value);
                 }}
            />

            <label htmlFor="phone number">Sleeve length</label>
            <input
              type="text"
              name="phone number"
              placeholder="Sleeve length.."
              // value={((userData || {}).user || {}).phoneNumber}
              //    value={phoneNumber}
                 onChange={(e) => {
                   setSleeveLength(e.target.value);
                 }}
            />

            <label htmlFor="address">Waist Length</label>
            <input
              type="text"
              name="address"
              placeholder="Waist length.."
              //    value={address}
              // value={((userData || {}).user || {}).address}
                 onChange={(e) => {
                   setWaistLength(e.target.value);
                 }}
            />

            <label htmlFor="zip code">Neck Measurement</label>
            <input
              type="text"
              name="zip code"
              placeholder="Neck Measurement.."
              // value={((userData || {}).user || {}).zipCode}
                 onChange={(e) => {
                   setNect(e.target.value);
                 }}
            />

            <label htmlFor="zip code">Comment/Design/Color</label>
            <input
              type="text"
              name="zip code"
              placeholder="Comment.."
              // value={((userData || {}).user || {}).zipCode}
                 onChange={(e) => {
                   setComment(e.target.value);
                 }}
            />
            {error && <ErrorNotice message={error} clearError={() => { setError(undefined) }} />}

            <input type="submit" value="Submit Measurement" />
          </form>

          {/* end */}
        </div>
        <div className="demo">
          <table>
            <thead>
              <tr>
                <th>Payment</th>
                <th>Issue Date</th>
                <th>Amount</th>
                <th>Period</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Payment">{}</td>
                <td data-label="Issue Date">02/01/2015</td>
                <td data-label="Amount">$2,311</td>
                <td data-label="Period">01/01/2015 - 01/31/2015</td>
              </tr>
              <tr>
                <td data-label="Payment">Payment #2</td>
                <td data-label="Issue Date">03/01/2015</td>
                <td data-label="Amount">$3,211</td>
                <td data-label="Period">02/01/2015 - 02/28/2015</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

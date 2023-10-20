import "./Contactdata.css";
import deleteicon from "../assert/delete.png";
import bety from "../assert/bety.jpg";
import React, { useRef } from "react";
//import emailjs from '@emailjs/browser';
import { useState } from "react";
import Items from "./items";

function OrderForm(props) {
  let err = "";
  let [msg, setMessage] = useState("");
  let [colors, setColor] = useState("");
  let [visibility, setvisibility] = useState("visible");
  const [name, setName] = useState();
  const [Phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [isclicked, setisclicked] = useState(false);
  const [message, semessage] = useState();
  const [Address, setAddress] = useState();
  
  const [totalprice, setTotalPrice] = useState(0);
  const resetForm = () => {
    setName("");
    setPhone("");

    setEmail("");
    semessage("");
    setAddress("");
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
 //   setvisibility("hidden");
    const formData = {
      name: e.target.user_name.value,
      email: e.target.user_email.value,
      phone: e.target.user_phone.value,
      user_address: e.target.user_address.value,
      message: e.target.message.value,
    };

    //Validate the form data
    if (formData.name.trim() === "") {
      err = "Please enter your name";
    } else if (!validateEmail(formData.email)) {
      err = "Please enter a valid email address";
    } else if (formData.phone.trim() === "") {
      err = "Please enter your Phone Number";
    } else if (formData.user_address.trim() === "") {
      err = "Please enter your Address";
    } else if (formData.message.trim() === "") {
      err = "Please enter your message";
    }

    // if(err===""){
    //     try {
    //         // emailjs.sendForm('service_0me9iwe', 'template_0quvy89', form.current, 'mPsq8IDI9mxFMS_Uu')
    //         //   .then((result) => {

    //         //     setMessage("Your message has sent");
    //         //     setColor("green")
    //         //     resetForm()
    //         //     setvisibility("visible")

    //           }, (error) => {
    //               console.log(e.target.user_name);
    //               setMessage("Your message has not sent");
    //               setColor("red")

    //           });
    //     } catch (error) {
    //         console.log(error);
    //         setMessage("An error has occurred. Please try again later.");
    //         setColor("red")
    //     }
    // }
    // else{
    //     setMessage(err);
    //     setColor("red")
    //     setvisibility("visible")
    // }
  };
  const deleteError = () => {
    setMessage("");
  };

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const removeId = (id) => {
    const ids = localStorage.getItem("productids").split(",");
    const cacheitems = localStorage.getItem("productidsItems").split(",");
    const index = ids.indexOf(id.toString());
    ids.splice(index, 1);
    cacheitems.splice(index, 1);
    localStorage.setItem("productids", ids);
    localStorage.setItem("productidsItems", cacheitems);
    props.setlength(ids.length - 1);
    props.sesIds(localStorage.getItem("productids").split(","));
  };

  const changeNumber = (e, id) => {
    const ids = localStorage.getItem("productids").split(",");
    const cacheitems = localStorage.getItem("productidsItems").split(",");
    const index = ids.indexOf(id.toString());
    cacheitems.splice(index, 1, e.target.value);
    localStorage.setItem("productidsItems", cacheitems);
    Costunfuction();
  };
  const onclick = (e) => {
    removeId(e);
  };
  const SetTo = () => {
    props.setClass(false);
  };

  const Costunfuction = (id) => {
    const items = document.querySelectorAll(".items");
    let cost = 0;
    items.forEach((element) => {
      const key = Number(element.getAttribute("id"));
      const price = Items[key].price;
      const noOfitem = element.querySelector("input").value;
      cost = cost + price * noOfitem;
  
    });
    setTotalPrice(cost);
  };
let second=0;
  return (
    <>
      <div className="contactContainer" data-aos="fade-up">
        <form ref={form} onSubmit={sendEmail}>
          <div className="formheader orderformheader">
            <span>
              <h3>Shopping Cart</h3>
            </span>
            <button onClick={SetTo}>
              <i className="fa fa-times" aria-label="x"></i>
            </button>
          </div>

          <div className=" orderform" style={{ backgroundColor: "#f7f8fa" }}>
            <span>product</span>
            {props.ids.map((id) => {
              const index = Items.findIndex((item) => item.id === Number(id));
              setInterval(()=>{
                second++;
                if (second==2) {
                  Costunfuction()
                  clearInterval()
                }
                
                 },1000)
              if (index !== -1) {
                let element = Items[index];

                return (
                  <>
                    {" "}
                    <div className="items" id={index}>
                      <div>
                        {" "}
                        <img src={element.image} alt="Product"></img>{" "}
                        <span>{element.Name}</span>
                        <input
                          type="number"
                          name="noOItems"
                          min="1"
                          max="10"
                          defaultValue={1}
                          onChange={(e) => {
                            changeNumber(e, element.id);
                          }}
                        ></input>
                        <span>{element.price} birr</span>
                      </div>
                      <img
                        src={deleteicon}
                        alt="remove"
                        onClick={() => {
                          onclick(element.id);
                        }}
                      ></img>
                    </div>
                  </>
                );
              }
            })}

            <h2>Total : {totalprice}.00 Birr</h2>
          </div>
          <div className="formcomponent">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                name="user_name"
                value={name}
                onFocus={deleteError}
              ></input>
              <input
                type="email"
                placeholder="Your Email"
                name="user_email"
                value={email}
                onFocus={deleteError}
              ></input>
              <input
                type="text"
                placeholder="Your Phone"
                name="user_phone"
                value={Phone}
                onFocus={deleteError}
              ></input>
              <input
                type="text"
                placeholder="Your Address"
                name="user_address"
                value={Address}
                onFocus={deleteError}
              ></input>
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Comment"
                value={message}
                onFocus={deleteError}
              ></textarea>
            </div>
            {}
            <p className="errormsg" style={{ color: colors }}>
              {msg}
            </p>

            <button
              type="submit"
              className="shaded"
              style={{ visibility: visibility }}
            >
              Order
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default OrderForm;

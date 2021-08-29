import React, { useState } from "react";
import TextInput from "../components/TextInput";
import { schemaValidation } from "../validation/TextInputValidation";

function Spacepulseforms() {
  const [focus, setFocus] = useState(false);
  const [input, setInput] = useState({
    vistorName: "",
    vistorPhone: "",
    vistorGovId: "",
  });

  const [errors, setErrors] = useState({
    vistorName: "",
    vistorPhone: "",
    vistorGovId: "",
  });

  const onChangeInput = (value, name) => {
    setInput({ ...input, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
  };

  const onFocus = () => {
    schemaValidation.validate(input).catch((err) => {
      console.log("akash: ", err.errors);
    });
  };

  return (
    <div className="w-full lg:w-2/5 h-screen bg-gray-100 lg:bg-white mx-auto ">
      <div className="grid h-auto  grid-cols-1 gap-x-12 px-4 lg:px-0 py-4">
        <form onSubmit={submitForm}>
          <div className="w-full h-36 my-2 bg-white border border-gray-200 rounded-lg">
            <div className="bg-blue-800 px-8 h-12 rounded-t-lg flex items-center">
              <h2 className="text-white font-bold text-md">Visit Details</h2>
            </div>
            <TextInput
              required={true}
              label="Vistor Name"
              onChange={(e) => onChangeInput(e.target.value, "vistorName")}
              placeholder="Your answer"
              onFocus={() => onFocus()}
              //onFocus={() => setFocus(true)}
              // onBlur={() => setFocus(false)}
            />
          </div>

          <div className="w-full h-24 my-2 bg-white border border-gray-200 rounded-lg">
            <TextInput
              required={true}
              label="Vistor Phone Number"
              onChange={(e) => onChangeInput(e.target.value, "vistorPhone")}
              placeholder="Your answer"
              onFocus={() => onFocus()}
            />
          </div>

          <div className="w-full h-24 my-2 bg-white border border-gray-200 rounded-lg">
            <TextInput
              required={true}
              label="Visit Govt ID"
              onChange={(e) => onChangeInput(e.target.value, "vistorGovId")}
              placeholder="Your answer"
              onFocus={() => onFocus()}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Spacepulseforms;

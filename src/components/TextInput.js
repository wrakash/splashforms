import React from "react";

function TextInput(props) {
  return (
    <div className="w-full h-full flex flex-col my-3 px-8 ">
      
      <label htmlFor={props?.label} className="font-bold text-md">
        <span>{props?.label}</span>{" "}
        {props?.required ? <span className="text-red-500">*</span> : null}
      </label>

      <input
        className="min-w-1/2  focus:outline-none mt-4 border-b border-gray-200"
        {...props}
      />

      {/* {!isValid && isTouched && (
        <h2 className="">{errorMsg}</h2>
      )} */}
    </div>
  );
}

export default TextInput;

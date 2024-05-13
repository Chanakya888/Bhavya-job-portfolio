import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col space-y-1 lg:space-y-5">
      <a
        href="https://instagram.com/bhavyeahgupta?igshid=MjEwN2IyYWYwYw=="
        target="_blank"
        rel="noopener noreferrer"
        className="inline"
      >
        <div className="flex space-x-0.5 lg:flex-col lg:space-x-0 lg:space-y-0.5">
          <p className="text-xs">Instagram:</p>
          <div className="w-fit">
            <p className="text-xs ">@bhavyeahgupta</p>
            <div className="h-px bg-primaryGreen opacity-50"></div>
          </div>
        </div>
      </a>
      <a href="mailto:dsg.bhavya@gmail.com">
        <div className="flex space-x-0.5 lg:flex-col lg:space-x-0 lg:space-y-0.5">
          <p className="text-xs">Contact:</p>
          <div className="w-fit">
            <p className="text-xs">dsg.bhavya@gmail.com</p>
            <div className="h-px bg-primaryGreen opacity-50"></div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Contact;

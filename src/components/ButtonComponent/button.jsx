import React from "react";

const Button = ({ text, icons  }) => {
  return (
    <>
      <div>
        <button className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-400 rounded-md hover:bg-gray-100 transition-all duration-200">
            
          <span className="text-xl">{icons}</span>
          {text}
        </button>
      </div>
    </>
  );
};

export default Button;

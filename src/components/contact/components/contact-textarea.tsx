import React, { forwardRef } from "react";
import { FieldError } from "react-hook-form";

type NameValues = "message"

interface ContactTextAreaProps extends React.ComponentProps<"textarea"> {
  label: string;
  name: NameValues;
  error?: FieldError // Make it optional, and handle it as a string for messages
  placeholder: string;
}

const ContactTextArea = forwardRef<HTMLTextAreaElement, ContactTextAreaProps>(
  ({ label, error, placeholder, ...rest }, ref) => {
    return ( 
      <div className="relative">
        <label
          htmlFor={rest.name}
          className={`
            absolute top-0 left-0 -translate-y-[7px] translate-x-2 bg-slate-100 
            dark:bg-slate-custom peer-focus:text-blue-500 text-xs leading-[14.3px] 
            font-poppins-semibold px-1 font-gothic-bold
            ${error ? "text-red-500" : "dark:text-slate-400 text-slate-600" }
          `}
        >
          {label}
        </label>
        {/* Input field */}
        <textarea
          ref={ref}
          placeholder={placeholder}
          className={`
            px-[14px] py-[13px] sm:py-[11.5px] rounded-sm text-sm resize-none h-full
            dark:text-slate-400 text-slate-600 outline-none appearance-none 
            ring-1 peer w-full bg-transparent dark:placeholder-slate-500
            ${error ? "ring-red-500 text-red-500" : "ring-slate-400 focus:ring-blue-500"}
          `}
          {...rest}
        /> {/* Error message */}
        {error && (
          <p className="text-red-500 text-[11px] leading-[12.54px] px-[14px] mt-[2px] -ml-3">
            {error.message}
          </p>
        )}
      </div>
    );
})
 
export default ContactTextArea;
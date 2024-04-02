import React, { useEffect, useRef, useState } from "react";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const animatedDivRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Change this value as per your requirement
    );

    if (animatedDivRef.current) {
      observer.observe(animatedDivRef.current);
    }

    return () => {
      if (animatedDivRef.current) {
        observer.unobserve(animatedDivRef.current);
      }
    };
  }, []);

  const [formData, setFormData] = useState({ name: "", message: "" });
  const [messageSent, setMessageSent] = useState(false);
  const [messageFailed, setMessageFailed] = useState(false);
  const [emptyError, setEmptyError] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const [connectHidden, setConnectHidden] = useState(true);

  const form = useRef();

  const handleRedirect = () => {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    const { name, message } = formData;
    e.preventDefault();
    if (name && message) {
      setIsSending(true);
      setEmptyError(false);
      emailjs
        .sendForm(
          "service_i4d7or9",
          "template_hhs9fo5",
          form.current,
          "sAyhX034uFwj7dZLB"
        )
        .then(
          (result) => {
            setIsSending(false);
            setMessageSent(true);
            setMessageFailed(false);

            setFormData({ name: "", message: "" });
          },
          (error) => {
            setIsSending(false);
            setMessageFailed(true);
            setMessageSent(false);
          }
        );
    } else {
      setEmptyError(true);
      setMessageSent(false);
      setMessageFailed(false);
    }
  };

  useEffect(() => {
    setMessageSent(false);
    setEmptyError(false);
    setMessageFailed(false);
  }, []);
  return (
    <div
      ref={animatedDivRef}
      className={` ${
        isVisible
          ? "opacity-1 translate-x-0 scale-[1]"
          : "opacity-0 scale-[0.8] "
      } duration-[2s] flex flex-col w-full md:w-1/2 items-center justify-center gap-4 `}
    >
      <div className=" backdrop-blur-lg w-full  rounded-[1em]">
        <div className="text-center w-full  md:p-2 rounded-[0.2rem] py-4 flex flex-col gap-8">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="project w-full flex flex-col gap-4 px-4 "
          >
            <input
              type="text"
              name="name"
              onChange={(e) => handleChange(e)}
              value={formData.name}
              placeholder="Your Name"
              className=" bg-transparent border border-[#c026d3] p-3  w-full rounded-[0.4rem] focus:outline-none md:hover:translate-x-2  duration-300 focus:border-green-400"
            />
            <textarea
              name="message"
              onChange={(e) => handleChange(e)}
              value={formData.message}
              className="bg-transparent border-2 border-[#c026d3] w-full p-2 rounded-[0.4rem] md:hover:translate-x-2 duration-300 focus:outline-none focus:border-green-400"
              rows="5"
              placeholder="Hi, Yubraj."
            ></textarea>

            <button className="bg-[#701a75] p-3  rounded-[0.4rem] focus:outline-none focus:border-green-400 md:hover:translate-x-2 duration-300 hover:bg-green-600 ">
              {isSending ? "Sending" : "Send"}
            </button>
            {messageSent && (
              <div className=" font-bold">Thank you for your message.</div>
            )}
            {messageFailed && (
              <div className=" font-bold text-red-500">
                Sorry, an error occured.
              </div>
            )}
            {emptyError && (
              <div className=" font-bold text-red-500">
                Please fill up all fields.
              </div>
            )}
          </form>
          <div className="  flex flex-col items-center justify-center p-4 gap-4 ">
            <div className=" flex items-center justify-center ">
              <div className=" flex items-center gap-4">
                <a href="https://np.linkedin.com/in/yubraj-adhikari-581553232" target="_blank">
                  <AiOutlineLinkedin className="h-8 w-8 md:cursor-pointer hover:text-[#0072b1] hover:scale-[1.4] ease-in-out duration-500 " />
                </a>
                <a href="https://github.com/yube01" target="_blank">
                  <AiOutlineGithub
                    onClick={() => handleRedirect("https://github.com/yube01")}
                    className="h-8 w-8 md:cursor-pointer hover:text-[#171515] hover:bg-[#4078c0] rounded-full hover:scale-[1.2] ease-in-out duration-500 "
                  />
                </a>
                {/* <AiOutlineMail  className="h-8 w-8 md:cursor-pointer hover:text-green-700 ease-in-out duration-300 " /> */}
              </div>
            </div>
            <div className="text-sm">
              <div className="">
                Feel free to{" "}
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={() => setConnectHidden(!connectHidden)}
                >
                  connect
                </span>
                <div
                  className={`overflow-hidden text-center text-xl duration-[2s] ${
                    connectHidden
                      ? "opacity-0 scale-[0.8]"
                      : "opacity-1 scale-[1] "
                  }`}
                >
                  ❤️
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

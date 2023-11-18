import { useState } from "react";
import axios from "axios";

const initialValues = {
  jobTitle: "",
  email: "",
  username: "",
  applicationDeadlineDate: "",
  specialisms: "",
  jobDescription: "",
};

const Form = () => {
  const [data, setData] = useState(initialValues);

  const handleFormData = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post("http://localhost:8000/post", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if(response.status===200) {
      alert("Success")
    }
  };

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
        <form method="POST" onSubmit={handleFormSubmit}>
          <div className="mb-5">
            <label
              htmlFor="jobTitle"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Job Title
            </label>
            <input
              type="text"
              name="jobTitle"
              id="jobTitle"
              value={data.jobTitle}
              onChange={handleFormData}
              placeholder="jobTitle"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={data.email}
              onChange={handleFormData}
              placeholder="example@domain.com"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="username"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={data.username}
              onChange={handleFormData}
              placeholder="Enter your Username"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              htmlFor="applicationDeadlineDate"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Application Deadline Date
            </label>
            <input
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              type="date"
              name="applicationDeadlineDate"
              id="applicationDeadlineDate"
              value={data.applicationDeadlineDate}
              onChange={handleFormData}
            />
          </div>

          <div className="flex flex-col mb-4">
            <label
              htmlFor="specialisms"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Specialisms
            </label>
            <select
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              id="specialisms"
              value={data.specialisms}
              name="specialisms"
              onChange={handleFormData}
            >
              <option>Retail</option>
              <option>Banking</option>
              <option>Management</option>
              <option>Human Resources</option>
            </select>
          </div>

          <div className="mb-5">
            <label
              htmlFor="jobDescription"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Job Description
            </label>
            <textarea
              rows="4"
              name="jobDescription"
              id="jobDescription"
              value={data.jobDescription}
              onChange={handleFormData}
              placeholder="Type your description"
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>
          <div>
            <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Form;

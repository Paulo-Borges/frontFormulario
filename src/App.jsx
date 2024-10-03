import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { boolean, object, string } from "yup"

const schema = object({
  first_name: string().required("This field is required").min(3, "You need to enter at least 3 characters."),
  last_name: string().required("This field is required").min(3, "You need to enter at least 3 characters."),
  query: string().required("please select a query type"),
  email_address: string().required("please select a query type"),
  confirm: boolean().required("to submit this form, please consent to being contacted"),

})

function App() {
  const { register, handleSubmit, formState: { errors }, } = useForm({ resolver: yupResolver(schema) })
  const onSubmit = (data) => console.log(data)

  return (

    <main className="flex justify-center items-center h-screen bg-slate-100">
      <form onSubmit={handleSubmit(onSubmit)} id="form" className="bg-white flex flex-col p-4 rounded-md">
        <h1 className="font-bold mb-4">Contact Us</h1>
        <div className=" sm:flex sm:gap-2">
          <div className=" flex flex-col">
            <label className="text-xs mb-2" >First Name *</label>
            <input type="text" id="first_name" className="border  mb-2 rounded-md text-xl cursor-pointer required:border-red-800 " {...register("first_name")} />
            <span className="text-xs text-red-700 ">{errors?.first_name?.message}</span>
          </div>

          <div className=" flex flex-col">
            <label className="text-xs mb-2">Last Name *</label>
            <input type="text" id="last_name" className="border  mb-2 rounded-md text-xl cursor-pointer" {...register("last_name")} />
            <span className="text-xs text-red-700 ">{errors?.last_name?.message}</span>
          </div>
        </div>
        <div className=" flex flex-col">
          <label className="text-xs mb-2">Email Address *</label>
          <input type="text" id="email_address" className="border  mb-2 rounded-md text-xl cursor-pointer" {...register("email_address")} />
          <span className="text-xs text-red-700 invisible">{errors?.email_address?.message}</span>
        </div>
        <div className="flex flex-col">
          <label className="text-xs mb-4">Query Type *</label>

          <div className=" sm:flex sm:gap-2 mb-4">
            <label className="border p-2 rounded-md mb-2 sm:w-full">
              <input type="radio" value="general enquiry" className="cursor-pointer" {...register("query")} /> General Enquiry
            </label>

            <label className="border p-2 rounded-md mb-2 sm:w-full">
              <input type="radio" value="support request" className="cursor-pointer" {...register("query")} /> Support Request
            </label>
          </div>
          <span className="text-xs text-red-700 ">{errors?.query?.message}</span>
        </div>
        <div className='flex flex-col'>
          <label className="text-xs mb-2">Message *</label>
          <textarea rows={5} name="comments" id="comments" className="border"></textarea>
          <span className="text-xs text-red-700 invisible"></span>
        </div>
        <div className="flex flex-wrap mt-4">
          <input type="checkbox" id="confirm" className="cursor-pointer" {...register("confirm")} />
          <label className="align-text-top text-[10px] sm:text-base"> I consent to being contavted bythe team *</label>
          <span className="text-[6px] text-red-700 ">{errors?.confirm?.message}</span>

        </div>
        <button className="bg-green-700 text-white text-xs font-medium mt-8 py-2 rounded">
          Submit
        </button>
      </form>
    </main>


  )
}

export default App

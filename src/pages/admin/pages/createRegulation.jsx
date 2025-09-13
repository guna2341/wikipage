import { LeftArrow } from '@/assets'
import { ButtonComponent, FileUploadBox, InputField } from '@/components';
import { useNavigate } from 'react-router-dom';
import { addToast } from '@heroui/toast';
import { useCreateUsers } from '@/store/admin/createUsers';
import { useEffect, useState } from 'react';

export const CreateRegulation = () => {

  const navigate = useNavigate();
  const addFaculty = useCreateUsers(e => e.addFaculty);
  const addStudent = useCreateUsers(e => e.addStudent);
  const [regulation,setRegulation] = useState("");
  const [err,setErr] = useState("");

  function toast(title, description, color) {
    addToast({
      title,
      description,
      variant: "flat",
      color,
    })
  }

  async function addUsers(role,data) {
      if (role == "faculty") {
        const response = await addFaculty(data);
        if (response.state) {
          toast("Success", response.message, "success");
        }
        else {
          toast("Error", response.message, "danger");
        }
      }
      else {
        if (!regulation.trim()) {
          setErr("Please fill this field");
          return;
        }
        const response = await addStudent(data, regulation);
        if (response.state) {
          toast("Success", response.message, "success");
        }
        else {
          toast("Error", response.message, "danger");
        }
      }
  }
  
  useEffect(() => {
    if (err && regulation.trim()) {
      setErr("");
    }
  },[regulation]);

  function handleClick() {
    navigate(-1);
  }

  return (
    <div className='p-7 h-full flex flex-col gap-6 overflow-scroll scrollbar-hide'>
      <div className='flex items-center gap-4'>
        <span onClick={handleClick} className='cursor-pointer'>
        <LeftArrow
          size={30}
        />
        </span>
        <p className='font-semibold leading-6 text-xl w-full pt-0.5'>
              Create Regulation
        </p>
      </div>
      <div
      className='bg-white rounded-2xl px-[50px] py-[42px] flex flex-col gap-8'
      >
        <div className='font-semibold leading-6 text-xl w-full pt-0.5 flex flex-col gap-5 max-w-[366px]'>
              Create Academic Regulation
              <InputField
              value={regulation}
              onChange={e => setRegulation(e.target.value)}
              isRequired
              error = {err}
              classnames={{
                  input: "placeholder:text-custom-1016 placeholder:font-normal placeholder:leading-6 placeholder:text-sm",
                  inputWrapper:"bg-custom-850 border border-custom-100" ,
              }}
              size={"lg"}
              placeholder={"Enter Regulation"}
              />
        </div>
        {/* <div className='flex gap-20 w-full'>
          <div className='font-semibold leading-6 text-xl flex flex-col gap-5'>
              Select Department
            <SelectComponent
              data = {departments}
              classNames={{
                trigger:"border border-custom-100 bg-custom-850 shadow-none min-w-[300px]",
                label:"text-custom-1016 font-normal leading-6",
              }}
              label='Select Department'
              />
          </div>
          <div className='font-semibold leading-6 text-xl flex flex-col gap-5 '>
              Select Course
            <SelectComponent
              data = {courses}
              classNames={{
                trigger:"border border-custom-100 bg-custom-850 shadow-none min-w-[300px]",
                label:"text-custom-1016 font-normal leading-6",
              }}
              label='Select Course'
              />
          </div>
        </div> */}
        <div className='flex flex-col gap-3 max-w-[491px] text-custom-1020 font-normal leading-6 text-base'>
          Upload Faculty List File:
                <FileUploadBox
                handleData={e => addUsers("faculty",e)}
                />            
        </div>
   <div className='flex flex-col gap-3 max-w-[491px] text-custom-1020 font-normal leading-6 text-base'>
          Upload Student List File:
                <FileUploadBox
                handleData={e => addUsers("student",e)}
                />            
        </div>
      </div>
      <div className='flex gap-4 justify-end py-4'>
                        <ButtonComponent
                        className={'bg-white border border-custom-100 text-black'}
                        >
                          Cancel
                        </ButtonComponent>
                        <ButtonComponent>
                          Save
                        </ButtonComponent>
          </div>
    </div>
  )
}


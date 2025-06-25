import { InputField } from '../input'
import { AddIcon, SearchIcon } from '@/assets'
import { ButtonComponent } from '../button'

export const CourseMaterialHeader = ({handleCreate}) => {
  return (
    <div className='flex justify-end gap-5'>
       <InputField
            radius={"sm"}
            placeholder={"Search..."}
            classname={'min-w-[320px]'}
            classnames={{
            mainWrapper:"bg-white",
            inputWrapper:"bg-white shadow-none border border-custom-1009"}}
            startContent={<SearchIcon/>}
                              />
      <ButtonComponent
      onClick={handleCreate}
      startContent={<AddIcon/>}
      >Create New Course
      </ButtonComponent>
    </div>
  )
}


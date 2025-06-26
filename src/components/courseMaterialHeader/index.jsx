import { AddIcon, SearchIcon } from '@/assets'
import { ButtonComponent, InputField } from '@/components'

export const CourseMaterialHeader = ({ handleCreate, handleSearch }) => {
  return (
    <div className='flex justify-end gap-5'>
      <InputField
        onChange={e => handleSearch(e.target.value)}
        radius={"sm"}
        placeholder={"Search..."}
        classname={'min-w-[320px]'}
        classnames={{
          mainWrapper: "bg-white",
          inputWrapper: "bg-white shadow-none border border-custom-1009"
        }}
        startContent={<SearchIcon />}
      />
      <ButtonComponent
        onClick={handleCreate}
        startContent={<AddIcon />}
      >Create New Course
      </ButtonComponent>
    </div>
  )
}


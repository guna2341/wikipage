import React from 'react';
import { InputField } from '../input';
import { AddIcon, Delete, Edit2, SearchIcon } from '@/assets';
import { SelectComponent } from '../select';
import { ButtonComponent } from '../button';
import { Checkbox } from '@heroui/checkbox';
import { cn } from '../cn';

export const StudentListTable = (props) => {
    const [edit, setEdit] = React.useState(props.isedit);
    const [selected, setselected] = React.useState(false);
    const [searchText, setSearchText] = React.useState('');
    const [filteredData, setFilteredData] = React.useState(props.student || []);

    const handleclick = () => {
        setEdit(!edit);
    };

    React.useEffect(() => {
        const lower = searchText.toLowerCase();
        const filtered = props.student.filter((s) =>
  (s?.name || '').toLowerCase().includes(lower) ||
  (s?.register || '').toLowerCase().includes(lower) ||
  (s?.email || '').toLowerCase().includes(lower) ||
  (s?.department || '').toLowerCase().includes(lower)
);

        setFilteredData(filtered);
    }, [searchText, props.student]);

    if (!filteredData) {

    }

    return (
        <div className="h-full">
            <div className="w-full p-5 bg-custom-1029 flex border-b-0 pb-0">
                <div className="flex gap-[15px]">
                    <InputField
                        startContent={<SearchIcon />}
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        classnames={{
                            inputWrapper: "bg-white border-2",
                            mainWrapper: "rounded-2xl",
                        }}
                        placeholder="Search by name or register no"
                        classname="w-[320px] h-[32px]"
                        radius="sm"
                    />
                    <SelectComponent
                        className="w-[156px]"
                        placeholder="All industries"
                        classNames={{
                            trigger: "h-[40px]",
                            mainWrapper: "bg-white rounded-2xl",
                        }}
                    />
                </div>
                <div className="flex gap-[15px] ml-auto">
                    {props.iseditBtn && (
                        <ButtonComponent
                            startContent={<span className="text-white"><Edit2 color="currentColor" /></span>}
                            children="Edit"
                            onClick={handleclick}
                            className="ml-auto"
                        />
                    )}
                    <ButtonComponent startContent={<AddIcon />} children="Upload" />
                </div>
            </div>

            {filteredData.length == 0 ?
                <div className='w-full h-full flex flex-col'>
                    <table className="w-full table-auto">
                        <thead className="sticky top-0 z-10 bg-custom-1029">
                            <tr className="text-center border-b border-custom-100">
                                <th className="pl-5">
                                    <Checkbox isSelected={selected} onValueChange={setselected} />
                                </th>
                                {props.header.map((h) => (
                                    <th key={h.id} className="font-semibold py-5 text-custom-1030 text-sm">
                                        {h.label}
                                    </th>
                                ))}
                                {edit &&
                                    <th className="font-semibold py-5 text-custom-1030 text-sm">
                                        Action
                                    </th>
                                }
                            </tr>
                        </thead>
                    </table>
                    <div className='w-full h-full flex justify-center items-center text-custom-1008 text-xl pb-20'>
                        No data found
                    </div>
                </div>
                :
                <div className="h-[calc(100%-4rem)] overflow-y-auto scrollbar-hide">
                    <table className="w-full table-auto">
                        <thead className="sticky top-0 z-10 bg-custom-1029">
                            <tr className="text-center border-b border-custom-100">
                                <th className="pl-5 z-10 relative">
                                    <Checkbox isSelected={selected} onValueChange={setselected} />
                                </th>
                                {props.header.map((h) => (
                                    <th key={h.id} className="font-semibold py-5 text-custom-1030 text-sm">
                                        {h.label}
                                    </th>
                                ))}
                                {edit &&
                                    <th className="font-semibold py-5 text-custom-1030 text-sm">
                                        Action
                                    </th>
                                }
                            </tr>
                        </thead>
                        <tbody className="w-full">
  {filteredData.map((row, index) => (
    <tr
      key={index}
      className={cn("text-center border-b border-custom-100 z-0", {
        "border-0": index === filteredData.length - 1,
      })}
    >
      <td className="pl-5 z-0 relative">
        {selected ? <Checkbox isSelected={true} /> : <Checkbox />}
      </td>

      {/* Render cells dynamically based on headers */}
      {props.header.map((col) => (
        <td key={col.id} className="text-custom-1004 text-sm py-[15px]">
          {row[col.id] || '-'}
        </td>
      ))}

      {edit && (
        <td>
          <div className="flex justify-center items-center gap-[15px]">
            <Edit2 />
            <Delete />
          </div>
        </td>
      )}
    </tr>
  ))}
</tbody>

                    </table>
                </div>
            }
        </div>
    );
};

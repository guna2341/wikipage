import React, { useEffect } from 'react';
import { InputField } from '../input';
import { AddIcon, Delete, Edit2, SearchIcon } from '@/assets';
import { SelectComponent } from '../select';
import { ButtonComponent } from '../button';
import { Checkbox } from '@heroui/checkbox';
import { cn } from '../cn';

export const StudentListTable = (props) => {
    const [edit, setEdit] = React.useState(props.isedit);
    const [selected, setselected] = React.useState(false);

    useEffect(() => { }, [props.student]);

    const handleclick = () => {
        setEdit(!edit);
    };

    return (
        <div className="h-full">
            <div className="w-full p-5 bg-custom-1029 flex border-b-0 pb-0">
                <div className="flex gap-[15px]">
                    <InputField
                        startContent={<SearchIcon />}
                        value={props.searchText}
                        onChange={(e) => props.setSearchText(e.target.value)}
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

            {props.data?.length == 0 ?
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
                <div className={cn("h-[calc(100%-4rem)] overflow-y-auto scrollbar-hide",props.className)}>
                    <table className="w-full table-auto">
                        <thead className="sticky top-0 z-10 bg-custom-1029">
                            <tr className="text-center border-b border-custom-100">
                                <th className="pl-5 z-10 relative">
                                    <Checkbox isSelected={selected} onValueChange={setselected} />
                                </th>
                                {props?.header?.map((h) => (
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
                        <tbody className='w-full'>
                            {props.data?.map((s, index) => (
                                <tr
                                    key={s.id}
                                    className={cn("text-center border-b border-custom-100 z-0", {
                                        "border-0": index === props.data?.length - 1,
                                    })}
                                >
                                    <td className="pl-5 z-0 relative">
                                        {selected ? <Checkbox isSelected={true} /> : <Checkbox />}
                                    </td>
                                    <td className="py-[15px] text-custom-1004 text-sm">{s?.name}</td>
                                    <td className="text-custom-1004 text-sm">{s?.email}</td>
                                    <td className="text-custom-1004 text-sm">{props.faculty ? s?.id : s?.roll_no}</td>
                                    <td className="text-custom-1004 text-sm">{s?.dept}</td>
                                    {/* {s.lab && <td className="text-custom-1004 text-sm">{s?.lab}</td>} */}
                                    {props.faculty && <td className="text-custom-1004 text-sm">{"course"}</td>}
                                    {s?.year && <td className="text-custom-1004 text-sm">{s?.year}</td>}
                                    {s?.semester && <td className="text-custom-1004 text-sm">{s?.semester}</td>}
                                    <td>
                                        {edit &&
                                            <div className="flex justify-center items-center gap-[15px]">
                                                <Edit2 />
                                                <Delete />
                                            </div>
                                        }
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
};

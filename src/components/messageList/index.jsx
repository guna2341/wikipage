import { DownArrow, SearchIcon } from '@/assets'
import { InputField, MessageCard } from '@/components'
import React, { useEffect } from 'react';
import { Shimmer } from '../shimmer/shimmer';

export const MessageList = ({
  loading,
  data = [],
  handleClick
}) => {
  const [active, setActive] = React.useState(-1);
  const [search, setSearch] = React.useState("");
  const [filtered, setFiltered] = React.useState(data);

  useEffect(() => {
    function filterData() {
      if (active == -1 || !active) {
        setActive(data?.[0]?.id)
      }
      if (!search) {
        setFiltered(data);
        return;
      };
      setFiltered(data?.filter((item) => item?.name?.toLowerCase()?.includes(search?.toLowerCase())));
    };
    filterData();
  }, [search, data]);
  
  return (
    <div className="w-full h-full py-5 overflow-hidden">
      {/* Header */}
      <div className="flex items-center px-5 gap-2.5">
        <span className="font-semibold text-xl leading-5">Messages</span>
        <span className="w-[29px] h-[22px] bg-custom-950 rounded-full flex justify-center items-center font-semibold text-xs leading-7">
          {data?.length || 0}
        </span>
      </div>

      {/* Search Bar */}
      <div className="px-5">
        <InputField
          size="lg"
          value={search}
          onChange={e => setSearch(e.target.value)}
          startContent={<SearchIcon />}
          placeholder="Search messages"
          classname="w-[300px] mt-[22px]"
        />
      </div>

      {/* Content Area */}
      <div className="h-[80%] overflow-y-scroll scrollbar-hide flex flex-col gap-3.5 px-5">
        {loading ? (
          <div className="flex flex-col gap-4 mt-8">
            {[...Array(5)].map((_, i) => (
             <Shimmer key={i} className={"w-full h-10 rounded-md"} />
            ))}
          </div>
        ) : filtered?.length === 0 ? (
          <div className="flex flex-col justify-center items-center h-full text-center text-gray-500">
            <p className="text-sm font-medium">No messages found</p>
            <p className="text-xs text-gray-400">Try adjusting your filters or check back later</p>
          </div>
          ) : (
              <div className='mt-8 flex flex-col gap-4'>
                {filtered?.map((list) => {
                  return (
                    <MessageCard
                      key={list?.roll_no || list?.id}
                      handleClick={() => {
                        handleClick(list);
                        setActive(list?.id)
                      }}
                      name={list?.name}
                      role={list?.role}
                      delay={list?.delay}
                      active={list?.id === active}
                    />)
                })}
                </div>
        )}
      </div>
    </div>
  );
};

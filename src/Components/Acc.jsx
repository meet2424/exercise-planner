import { useState } from 'react';
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';

export default function Acc({ data }) {
  const [arrow, setArrow] = useState(false);

  return (
    <>
      <div key={data.head} className="mt-8">
        <div
          className="text- flex items-center justify-between   cursor-pointer"
          onClick={() => setArrow(!arrow)}
        >
          <div className="">{data.head}</div>
          <div className="">
            {arrow ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
          </div>
        </div>

        {arrow && (
          <div className="mt-2 px-2">
            {data.list.map((item, index) => {
              return (
                <>
                  <div className="py-8" key={index + 1}>
                    <div className="font-quicksand">
                      {index + 1}
                      <span className="ml-2 font-poppins">{item.label}</span>
                    </div>
                    <img
                      src={require(`../images/${data.head}/${item.image}`)}
                      alt={item.label}
                      className="mt-2"
                    />
                  </div>
                </>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

import React, { useState } from 'react';
import data from '../Data/data';
import { Select, Option } from '@material-tailwind/react';
import Acc from './Acc';

export const Main = () => {
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const [day, setDay] = useState('');

  return (
    <>
      <div className="mt-20 w-[80%] md:w-[50%] mx-auto shadow-lg bg-footer py-5 mb-10 px-4 text-pup rounded-md">
        <div className="w-full">
          <Select label="Select Day" size="lg" onChange={(e) => setDay(e)}>
            {days.map((day) => {
              return (
                <Option key={day} value={day}>
                  {day}
                </Option>
              );
            })}
          </Select>
        </div>
        <div className="px-2 ">
          {data.map((data) => {
            if (data.days.includes(day)) {
              return <Acc key={data.head} data={data} />;
            }
          })}
        </div>
      </div>
    </>
  );
};

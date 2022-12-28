import React from 'react';
// import { Avatar } from '@material-tailwind/react';
// import luffy from '../images/luffy.jpg';

export default function Navbar() {
  return (
    <>
      <div className="flex px-10 md:px-20 justify-between py-4 shadow-lg">
        <div className="text-2xl font-robo">Gaurav Gym List</div>
        <div className="">
          {/* <Avatar src={luffy} className="h-10 w-10" alt="avatar" size="xs" /> */}
        </div>
      </div>
    </>
  );
}

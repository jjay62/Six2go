import React from 'react'

interface CardProps {
    title: string;   
    desc: string;
    id?: number;
    icon?: React.ReactNode; 
  }


const Card = ({ title, desc, id, icon }: CardProps) => {
    return (
      <div className="flex justify-center items-center text-center rounded-lg border-2 border-white/20 px-5 py-6 flex flex-col gap-2 min-w-[220px] max-w-[260px] aspect-[3/4] min-h-[280px] md:min-w-0 md:max-w-none transition-all duration-200 hover:border-blue-500 hover:shadow-xl shadow-md cursor-pointer bg-gray-900 text-white">
        {icon && icon}
        <h2>{title}</h2>
        <hr className="border-white/20" />
        <p>{desc}</p>
      </div>
    );
  };

export default Card
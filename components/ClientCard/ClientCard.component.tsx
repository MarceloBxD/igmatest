import React from "react";

type ClientProps = {
  clientData: {
    name: string;
    cpf: string;
    birthday: string;
  };
};

export const ClientCard = ({ clientData }: ClientProps) => {
  return (
    <div className="mt-4 max-w-[50%] mx-auto w-full p-4 border border-gray-300 rounded-md bg-gray-900 shadow-md" data-testid='clientcard-testid'>
      <p className="text-lg font-semibold text-white">{clientData.name}</p>
      <p className="text-gray-400">{clientData.cpf}</p>
      <p className="text-gray-400">{clientData.birthday}</p>
    </div>
  );
};

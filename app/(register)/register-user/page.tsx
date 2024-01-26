const formData = [
  {
    name: "name",
    label: "Nome",
    type: "text",
    required: true,
  },
  {
    name: "cpf",
    label: "CPF",
    type: "text",
    required: true,
  },
  {
    name: "birthday",
    label: "Aniversário",
    type: "date",
    required: true,
  },
];

const RegisterUser = () => {
  return (
    <form className="mx-auto grid gap-6 text-center lg:max-w-5xl lg:w-full lg:grid-cols-2">
      <div className="flex flex-col items-center justify-center bg-white dark:bg-zinc-900/40 p-8 rounded-lg shadow-md">
        {formData.map((data) => (
          <div
            key={data.name}
            className="flex flex-col items-center justify-center bg-white dark:bg-zinc-900/40 p-8 rounded-lg shadow-md"
          >
            <label
              htmlFor={data.name}
              className="mb-2 text-lg font-semibold text-gray-800 dark:text-white"
            >
              {data.label}
            </label>
            <input
              type={data.type}
              name={data.name}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary dark:border-neutral-700 dark:bg-zinc-800/50"
            />
          </div>
        ))}
      </div>

      <button
        type="submit"
        className="col-span-2 bg-primary text-white p-3 rounded-md hover:bg-primary/80 focus:outline-none focus:ring focus:border-primary dark:bg-neutral-700 dark:hover:bg-neutral-800/30"
      >
        Enviar
      </button>
    </form>
  );
};

export default RegisterUser;

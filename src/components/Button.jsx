const Button = ({ isLoading }) => {
  return (
    <button
      className={`border rounded-3xl py-2  ${
        isLoading ? "bg-gray-500" : "bg-blue-500 text-white"
      } font-bold hover:bg-blue-800`}
    >
      {isLoading ? "Aguarde" : "Localizar Cep"}
    </button>
  );
};

export default Button;

import { useState } from "react";

import Logo from "../Logo";
import Button from "../Button";
import Input from "../Input";

import axios from "axios";

const Page1 = () => {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCepChange = (newCep) => {
    setCep(newCep);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const data = response.data;

      if (data.error) {
        setError("Cep não encontrado");
        setEndereco(null);
      } else {
        setEndereco(data);
        setError("");
      }
    } catch (error) {
      setError("Erro ao buscar cep", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-white px-5 py-3  rounded-2xl max-w-[370px] min-w-[370px] flex flex-col gap-2 shadow-2xl">
      <Logo />
      <h3 className="text-xs text-gray-700">
        Insira seu Cep abaixo para localizarmos
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <Input value={cep} onChange={handleCepChange} />
        <Button isLoading={loading} />
      </form>
      {endereco && (
        <div className="flex flex-col gap-2 ">
          <h1 className="font-bold">Endereço Encontrado - {endereco.cep}</h1>
          <div className="flex items-center justify-between">
            <h1 className="text-sm text-gray-600 font-bold ">Logradouro:</h1>
            <h1 className="font-medium text-sm">
              {endereco.logradouro || "Não disponível"}
            </h1>
          </div>
          <div className="flex items-center justify-between">
            <h1 className="text-sm text-gray-600 font-bold ">Bairro:</h1>
            <h1 className="font-medium text-sm">
              {endereco.bairro || "Não disponível"}
            </h1>
          </div>
          <div className="flex items-center justify-between">
            <h1 className="text-sm text-gray-600 font-bold ">Cidade:</h1>
            <h1 className="font-medium text-sm">
              {endereco.localidade}-{endereco.uf}
            </h1>
          </div>
          <div className="flex items-center justify-between ">
            <h1 className="text-sm text-gray-600 font-bold ">Estado:</h1>
            <h1 className="font-medium text-sm">
              {endereco.estado || "Não disponível"}
            </h1>
          </div>
          <div className="flex items-center justify-between ">
            <h1 className="text-sm text-gray-600 font-bold ">Região:</h1>
            <h1 className="font-medium text-sm">
              {endereco.regiao || "Não disponível"}
            </h1>
          </div>
          <div className="flex items-center justify-between ">
            <h1 className="text-sm text-gray-600 font-bold ">DDD:</h1>
            <h1 className="font-medium text-sm">
              {endereco.ddd || "Não disponível"}
            </h1>
          </div>
        </div>
      )}
      {error && <p className="text-red-500 font-bold">{error}</p>}
    </div>
  );
};

export default Page1;

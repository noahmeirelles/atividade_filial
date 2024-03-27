import filial from "./Filial";
class FilialRepository {
    constructor() {
      this.filiais = [];
    }
  
    getAll() {
      return this.filiais;
    }
  
    get(id) {
      return this.filiais.find((filial) => filial.id === id);
    }
  
    add(filial) {
      this.filiais.push(filial);
    }
  
    remove(id) {
      this.filiais = this.filiais.filter((filial) => filial.id !== id);
    }
  
    update(id, name,fundacao,funcionarios,turmas, bairro, cidade, cep, telefone,  email,responsavel, cargo) {
      const filial = this.get(id);
  
      if (filial) {
        filial.name = name;
        filial.fundacao = fundacao;
        filial.funcionarios = funcionarios;
        filial.turmas = turmas;
        filial.bairro = bairro;
        filial.cidade = cidade;
        filial.cep = cep;
        filial.telefone = telefone;
        filial.email = email;
        filial.responsavel = responsavel;
        filial.cargo = cargo;
      }
      return filial;
    }
  }
  
  const filialRepository = new filialRepository();
const newFilial = new filial(filial.name, filial.fundacao, filial.funcionarios, filial.turmas, filial.bairro, filial.cidade, filial.cep, filial.telefone, filial.email, filial.responsavel, filial.cargo);

filialRepository.add(newFilial);

export default FilialRepository;
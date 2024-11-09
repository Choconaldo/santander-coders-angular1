export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  adress: string;
  number?: number;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  cep: string;
}

export const fictionalContacts = [
  {
    id: '_ewqqqhh',
    name: 'Fulano de Tal',
    email: 'fulano@teste.com',
    phone: '11123456789',
    adress: 'Rua das Acácias',
    number: 752,
    complement: 'Apto. 120',
    neighborhood: 'Centro',
    city: 'São Paulo',
    state: 'SP',
    cep: '123456000',
  },
  {
    id: '_eeebehh',
    name: 'Beltrano dos Santos',
    email: 'beltrano@teste.com',
    phone: '19123456789',
    adress: 'Rua das Flores',
    number: 1123,
    neighborhood: 'Vila Teixeira',
    city: 'João Pessoa',
    state: 'PB',
    cep: '153456012',
  },
  {
    id: '_ewqhhhh',
    name: 'Ciclano de Arruda',
    email: 'ciclano@teste.com',
    phone: '11987654321',
    adress: 'Rua dos Limoeiros',
    number: 245,
    complement: 'Apto. 152',
    neighborhood: 'Santa Lúcia',
    city: 'Curitiba',
    state: 'PR',
    cep: '19456130',
  },
];

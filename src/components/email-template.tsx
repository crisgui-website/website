interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  message?: string;
  product?: string;
  term?: number;
  city_state?: string;
}

export const EmailContactTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  phone,
  message,
}) => (
  <div>
    <h1>Dados para entrar em contato</h1>
    <p><strong>Nome:</strong> {name}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Telefone:</strong> {phone}</p>
    <p><strong>Mensagem:</strong> {message}</p>
  </div>
);

export const EmailBudgetTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  phone,
  product,
  term,
  city_state,
  message,
}) => (
  <div>
    <h1>Dados para enviar orçamento</h1>
    <p><strong>Nome:</strong> {name}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Produto:</strong> {product}</p>
    <p><strong>Prazo:</strong> {term} dias</p>
    <p><strong>Cidade/Estado:</strong> {city_state}</p>
    <p><strong>Telefone:</strong> {phone}</p>
    <p><strong>Mensagem:</strong> {message}</p>
  </div>
);

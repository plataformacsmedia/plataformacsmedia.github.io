module.exports = function translateFirebaseMessages(code) {
  switch (code) {
    case 'auth/claims-too-large':
      return 'Erro claims too large.'
    case 'auth/email-already-exists':
      return 'Email já cadastrado'
    case 'auth/id-token-expired':
      return 'O token de código do Firebase provisionado expirou.'
    case 'auth/id-token-revoked':
      return 'O token de código do Firebase foi revogado.'
    case 'auth/insufficient-permission':
      return 'Permissões insuficientes.'
    case 'auth/internal-error':
      return 'Erro interno do servidor'
    case 'auth/invalid-argument':
      return 'Argumento inválido'
    case 'auth/invalid-claims:':
      return 'Os atributos de declaração personalizados são inválidos.'
    case 'auth/invalid-continue-uri':
      return 'O URL de confirmação precisa ser uma string de URL válida.'
    case 'auth/invalid-creation-time':
      return 'O horário da criação precisa ser um string de data UTC válido.'
    case 'auth/invalid-credential':
      return 'Credenciais inválidas'
    case 'auth/invalid-disabled-field':
      return 'O valor fornecido para a propriedade do usuário disabled é inválido. Precisa ser um valor booleano.'
    case 'auth/invalid-display-name':
      return 'O valor fornecido para a propriedade do usuário displayName é inválido. Precisa ser uma string não vazia.'
    case 'auth/invalid-dynamic-link-domain':
      return 'O domínio de link dinâmico fornecido não está configurado ou autorizado para o projeto atual.'
    case 'auth/invalid-email':
      return 'Email inválido.'
    case 'auth/invalid-email-verified':
      return 'Verificação de email inválida'
    case 'auth/invalid-hash-algorithm':
      return 'O algoritmo de hash precisa corresponder a uma das strings na lista de algoritmos compatíveis.'
    case 'auth/invalid-hash-block-size':
      return 'O tamanho do bloco de hash precisa ser um número válido.'
    case 'auth/invalid-hash-derived-key-length':
      return 'O tamanho da chave derivada do hash precisa ser um número válido.'
    case 'auth/invalid-hash-key':
      return 'A chave de hash precisa ter um buffer de byte válido.'
    case 'auth/invalid-hash-memory-cost':
      return 'O custo da memória hash precisa ser um número válido.'
    case 'auth/invalid-hash-parallelization':
      return 'O carregamento em paralelo do hash precisa ser um número válido.'
    case 'auth/invalid-hash-rounds':
      return 'O arredondamento de hash precisa ser um número válido.'
    case 'auth/invalid-hash-salt-separator':
      return 'O campo do separador de "salt" do algoritmo de geração de hash precisa ser um buffer de byte válido.'
    case 'auth/invalid-id-token':
      return 'Token inválido'
    case 'auth/invalid-last-sign-in-time':
      return 'O último horário de login precisa ser um string de data UTC válido.'
    case 'auth/invalid-page-token':
      return 'O token de próxima página fornecido em listUsers() é inválido. Precisa ser uma string não vazia válida.'
    case 'auth/invalid-password':
      return 'A senha precisa ter pelo menos 6 caracteres'
    case 'auth/invalid-password-hash':
      return 'O hash da senha precisa ser um buffer de byte válido.'
    case 'auth/invalid-password-salt':
      return 'O "salt" da senha precisa ser um buffer de byte válido'
    case 'auth/invalid-phone-number':
      return 'Numero de telefone inválido'
    case 'auth/invalid-photo-url':
      return 'Valor de URL inválido'
    case 'auth/invalid-provider-data':
      return 'O providerData precisa ser uma matriz válida de objetos UserInfo.'
    case 'auth/invalid-provider-id':
      return 'O providerId precisa ser um string de identificador de provedor compatível válido.'
    case 'auth/invalid-session-cookie-duration':
      return 'A duração do cookie da sessão precisa ser um número válido em milissegundos entre 5 minutos e 2 semanas.'
    case 'auth/invalid-uid':
      return 'O uid fornecido precisa ser uma string não vazia com no máximo 128 caracteres.'
    case 'auth/invalid-user-import':
      return 'O registro do usuário a ser importado é inválido.'
    case 'auth/maximum-user-count-exceeded':
      return 'O número máximo permitido de usuários a serem importados foi excedido.'
    case 'auth/missing-android-pkg-name':
      return 'Um nome de pacote Android precisa ser fornecido para a instalação do app Android.'
    case 'auth/missing-continue-uri':
      return 'Um URL de confirmação válido precisa ser fornecido na solicitação.'
    case 'auth/missing-hash-algorithm':
      return 'É necessário fornecer o algoritmo de geração de hash e seus parâmetros para importar usuários com hashes de senha.'
    case 'auth/missing-ios-bundle-id':
      return 'A solicitação está sem o ID do pacote do iOS.'
    case 'auth/missing-uid':
      return 'Um identificador uid é necessário para a operação atual.'
    case 'auth/operation-not-allowed':
      return 'O provedor de login fornecido está desativado para o projeto do Firebase. Ative-o na seção Método de login do Console do Firebase.'
    case 'auth/phone-number-already-exists':
      return 'Número de telefone já existe'
    case 'auth/project-not-found':
      return 'Nenhum projeto do Firebase foi encontrado com a credencial usada para inicializar os Admin SDKs. Consulte Configurar um projeto do Firebase para ver a documentação sobre como gerar uma credencial para seu projeto e usá-la na autenticação dos Admin SDKs.'
    case 'auth/reserved-claims':
      return 'Uma ou mais declarações de usuário personalizadas fornecidas para setCustomUserClaims() são reservadas. Por exemplo, não use as declarações específicas do OIDC, como sub, iat, iss, exp, aud, auth_time etc., como chaves para declarações personalizadas.'
    case 'auth/session-cookie-expired':
      return 'O cookie da sessão do Firebase fornecido expirou.'
    case 'auth/session-cookie-revoked':
      return 'O cookie da sessão do Firebase foi revogado.'
    case 'auth/uid-already-exists':
      return 'O uid fornecido já está sendo usado por um usuário existente. É necessário que cada usuário tenha um uid exclusivo.'
    case 'auth/unauthorized-continue-uri':
      return 'O domínio da URL de confirmação não está na lista de permissões. Acesse o Console do Firebase para colocar o domínio na lista de permissões.'
    case 'auth/user-not-found':
      return 'Não há registro de usuário existente correspondente ao identificador fornecido.'
    case 'auth/wrong-password':
      return 'Email ou senha inválidos'
  }
}
# Gerenciador de Vídeos do YouTube

Este é um aplicativo simples que permite gerenciar vídeos do YouTube. Você pode adicionar URLs de vídeos, reproduzi-los e excluí-los facilmente.

## Funcionalidades

- **Adicionar Vídeos**: Insira a URL de um vídeo do YouTube e clique no botão "Adicionar Vídeo" para salvá-lo na lista.
- **Reproduzir Vídeos**: Clique no botão "Reproduzir" ao lado de cada vídeo salvo para assisti-lo diretamente no aplicativo.
- **Excluir Vídeos**: Clique no botão "Excluir" para remover um vídeo da lista.
- **Mensagens de Erro**: Quando uma URL inválida é inserida, uma mensagem de erro será exibida em uma caixa de texto formatada.

## Tecnologias Utilizadas

- **Angular**: O framework principal utilizado para o desenvolvimento do aplicativo.
- **TypeScript**: Linguagem utilizada para desenvolver o aplicativo.
- **Cypress**: Usado para testes end-to-end, garantindo que a funcionalidade do aplicativo esteja conforme o esperado.

## Como Usar

1. **Instale as Dependências**: 
   ```bash
   npm install
  ```

2. **Inicie o Servidor de Desenvolvimento**:

```bash

    ng serve
```

3. **Acesse o Aplicativo**: Abra seu navegador e acesse http://localhost:4200.

4. **Adicionar um Vídeo**:
      -  Insira a URL do vídeo do YouTube no campo de entrada.
      -  Clique no botão "Adicionar Vídeo" para salvá-lo.

5. **Reproduzir um Vídeo**:
      -  Clique no botão "Reproduzir" ao lado do vídeo que deseja assistir.

6. **Excluir um Vídeo**:
      -  Clique no botão "Excluir" ao lado do vídeo que deseja remover da lista.


## **Estrutura do Projeto**

```plaintext

  src/
  ├── app/
  │   ├── app.component.ts  # Componente principal
  │   ├── app.component.html # Template HTML do componente
  │   └── app.component.css  # Estilos do componente
  └── index.html            # Ponto de entrada do aplicativo

```
## Estilos

  Os botões possuem as seguintes cores:

      Adicionar Vídeo: Verde
      Excluir Vídeo: Vermelho

## Contribuições

Sinta-se à vontade para contribuir com melhorias e novas funcionalidades. Você pode abrir uma issue ou enviar um pull request no repositório.
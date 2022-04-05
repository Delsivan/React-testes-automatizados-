import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import App, { calcularNovoSaldo } from './app';

describe("Componente principal", () => {
  describe("Quando eu abro o app do banco", () => {
    it("o nome é exibido", () => {
      render(<App />); //Renderiza o component App

      expect(screen.getByText("ByteBank")).toBeInTheDocument();
      //expect: espera receber
      //screen: acessa o component
      //getByText: busca o texto
      //toBeInTheDocument: para saber se ele está no documento html
    })
    it("o saldo é exibido", () => {
      render(<App />);

      expect(screen.getByText("Saldo:")).toBeInTheDocument;
    })
    it("o botão de realizar transação é exibido", () => {
      render(<App />);

      expect(screen.getByText("Realizar operação").toBeInTheDocument);
    })
  })
  // describe('Quando eu realizo uma transação', () => {
  //   it('que é um saque, o valor vai diminuir', () => {
  //     const valores = {
  //       transacao: 'saque',
  //       valor: 50
  //     }

  //     const novoSaldo = calcularNovoSaldo(valores, 150)

  //     expect(novoSaldo).toBe(100);
  //     //expect = espera que 
  //     //toBe = seja igual a 
  //   });
  //   it('que é um saque, a transação deve ser realizada', () => {
  //     render(<App />);

  //     const saldo = screen.getByText('R$ 1000');
  //     const transacao =  screen.getByLabelText('Saque');
  //     const valor = screen.getByTestId('valor');
  //     const botaoTransacao = screen.getByText('Realizar operação');
  //     // irá realizar a busca por esses parametros.

  //     expect(saldo.textContent).toBe('R$ 1000')
  //     //textContent = pega o valor(conteúdo)

  //     fireEvent.click(transacao, { target: { value: 'saque'}});
  //     fireEvent.change(valor, { target: { value:  10 }});
  //     fireEvent.click(botaoTransacao);
      
  //     expect(saldo.textContent).toBe('R$ 990');
  //   })
  // })
})
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
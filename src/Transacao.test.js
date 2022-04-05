import React from 'react';
import { render } from '@testing-library/react'
import Transacao from './Transacao'

//snapshot = tem que dá match, sempre tem que ter o que foi salvo no snapshot.
describe('Componente de transação do extrato', () => {
    it('O snapshot do component deve permanecer sempre o mesmo', () => {
        const { container } = render(<Transacao 
            data="08/09/2020"
            tipo="Saque"
            valor="20.00"
        />)

        expect(container.firstChild).toMatchSnapshot();
    })
})
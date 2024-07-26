import { fireEvent, render, screen } from '@testing-library/react'
import PostComment from '..'

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>)
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar dois comentários', () => {
        render(<PostComment />)

        fireEvent.change(screen.getByTestId('textarea-comentario'), {
            target: {
                value: 'primeiro comentário'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentario'))
        expect(screen.getByText('primeiro comentário')).toBeInTheDocument()

        fireEvent.change(screen.getByTestId('textarea-comentario'), {
            target: {
                value: 'segundo comentário'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentario'))
        expect(screen.getByText('segundo comentário')).toBeInTheDocument()

        expect(screen.getAllByTestId('comentario')).toHaveLength(2)
    })
})
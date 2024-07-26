import { render, screen } from "@testing-library/react";
import Post from "..";

describe('Teste para o Componente Post', () => {
  test('Deve renderizar o componente corretamente', () => {
    render(
      <Post imageUrl="https://via.placeholder.com/100x100">
        teste
      </Post>
      )
    expect(screen.getByText('teste')).toBeInTheDocument();
  });
})
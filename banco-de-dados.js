import { sql } from "./db";

export class Database {
  create(artigo) {
    const id = 11;
    const nome = artigo.nome;
    const descricao = artigo.conteudo;
    const conteudo = artigo.imagem;
    const imagem = artigo.imagem;
    const github = artigo.github;

    sql`insert into artigos (id, nome, descricao, imagem, github)
    values (${id}, ${nome}, ${descricao}, ${conteudo}, ${imagem}, ${github})`;
  }
}
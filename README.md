# Curso de Maturidade no Espírito

Landing page preparada para dois ambientes de publicação:

- OpenAI Sites/Cloudflare, por meio do vinext;
- Vercel, por meio do Next.js.

O conteúdo, os estilos e os arquivos de mídia são compartilhados entre os dois
ambientes. Não há uma segunda versão da página para manter.

## Requisitos

- Node.js `>=22.13.0`

## Desenvolvimento local

Para usar o mesmo ambiente da publicação atual:

```bash
npm install
npm run dev
```

Para usar o ambiente equivalente ao da Vercel:

```bash
npm run dev:vercel
```

## Compilações

```bash
# OpenAI Sites
npm run build:sites

# Vercel
npm run build:vercel
```

Ao importar este repositório na Vercel, o arquivo `vercel.json` seleciona
automaticamente a compilação Next.js. A publicação atual continua usando o
comando padrão `npm run build`, que permanece baseado em vinext.

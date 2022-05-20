[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/cris-ta/crishub.com)

# crishub.com

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [PlanetScale](https://planetscale.com)
- **ORM**: [Prisma](https://prisma.io/)
- **Deployment**: [Vercel](https://vercel.com)
- **Content**: [MDX](https://github.com/mdx-js/mdx)
- **Styling**: [Chakra UI](https://chakra-ui.com/)
- **Services**:
  - [Raindrop](https://raindrop.io/) for Bookmarks

## Running Locally

```bash
$ git clone https://github.com/cris-ta/crishub.com.git
$ cd crishub.com
$ yarn
$ yarn dev
```

Create a `.env` file similar to [`.env.example`](https://github.com/cris-ta/crishub.com/blob/main/.env.example).

## Migration

```bash
prisma migrate dev --name init
```

# crishub.com

I was tired of writing build tooling boilerplate for projects so I made this lightweight zero-config TypeScript starter.

---

# What's in the box
**Client-side**
- [TypeScript](https://www.typescriptlang.org/)
- [Sass](https://www.npmjs.com/package/sass)
- [Parcel](https://parceljs.org/)
- *(anything supported by Parcel -- Babel, React, PostCSS, etc)*
- Sample page using Sass and TypeScript with a sample ajax call to server.

**Server-side**
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://www.npmjs.com/package/express)
- Sample REST API

# Scripts
`npm start` - Run dist/ files in prod.

`npm run build` - Compile TypeScript and bundle static files into respective dist/ folders for prod.

`npm run watch` - Hot reload server that watches server and static files.

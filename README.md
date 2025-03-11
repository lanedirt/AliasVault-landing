<div align="center">

<h1>AliasVault</h1>

</div>

Welcome to the AliasVault landing page repository. This project contains the source code for the website deployed at [https://aliasvault.net](https://aliasvault.net).

AliasVault is an open-source password and (email) alias manager built with C# ASP.NET technology. It can be self-hosted on your own server with Docker, providing a secure and private solution for managing your online identities and passwords.

### Key Features of AliasVault:
- **Zero-knowledge architecture**: All data is end-to-end encrypted on the client and stored in encrypted state on the server.
- **Built-in email server**: Generate virtual email addresses for each identity.
- **Virtual identities**: Create separate identities for different websites, enhancing security and privacy.
- **Open-source**: Available on GitHub and can be self-hosted.

For more information about AliasVault, including installation instructions and technical details, please visit the [main repository](https://github.com/lanedirt/AliasVault).

---

This landing page is built using [Next.js](https://nextjs.org), a powerful React framework.


## Development
In order to run the development server, run the following command:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Deploy with Docker
You can easily deploy the landing page using Docker:
```
docker compose up -d
```

### Updating the Deployment
To update the deployment, pull the latest changes and rebuild the container:
```
git pull
docker compose up -d --build --force-recreate
```
## Getting up and running
Use these commands to start the CLI locally. From there you should be able to figure the project out using the guides bellow.
```bash
git clone git@github.com:[YOUR_FORK_HERE]/Appwrite-Starter.git

cd Appwrite-Starter

npm install

npm run start
```

## Folder structure
```bash
 .
 ├─ src # contains the code for the cli
 └─ templates # contains the addons
    ├─ vuejs # the Vue.JS template files
    │  ├─ batteriesincluded # the batteries-included template
    │  └─ basic # the basic setup
    └─ vanilla # the Vanilla template files
```

## Moustaches
Currently, these moustaches/placeholders will be replaced in the templates.
Quick Tip: Escape unwanted moustaches with a `\ ` like `\{{counter}}`

- **projectName** The name of the project
- **author** The name of the author
- **appwriteEndpoint** The URL of the users Appwrite endpoint
- **appwriteProject** The id of the users Appwrite project
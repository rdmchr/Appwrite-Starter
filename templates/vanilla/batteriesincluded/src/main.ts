import './style.css';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>Hello {{projectName}}!</h1>
  <p>This is a Vite project created by the Appwrite Starter.</p>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a>
  <a href="https://github.com/rdmchr/Appwrite-Starter" target="_blank">Appwrite Starter</a>
`;

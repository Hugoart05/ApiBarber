# apibarber

##INSTRUÕES PASSO A PASSO PARA RODAR O PROJETO
 ![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
# 1 - Instalar dependencias do projeto
  npm install

# 2 - Editar "script" no arquivo package.json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon", // Inicia o servidor no nodemon
    "build": "npx tsc" // Converte de typescript para javaescript
  },

  cria o .gitignore
 
 # 3 -  Editar o arquivo tsconfig 
   <code>{
    "compilerOptions": {
      "target": "es5",                          
      "module": "commonjs",                    
      "lib": ["es6"],                     
      "allowJs": true,
      "outDir": "build",                          
      "rootDir": "src",
      "strict": true,         
      "noImplicitAny": true,
      "esModuleInterop": true,
      "resolveJsonModule": true
    }
  }</code>
# 4 - Criar o arquivo nodemon.json
  <code>{
    "watch": ["src"],
    "ext": ".ts,.js",
    "ignore": [],
    "exec": "ts-node ./src/index.ts"
  }</code>

# 5 - Executar
    Comando no terminal : "npm run dev"

   

  

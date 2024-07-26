# apibarber
npm init
npm i express
npm i --save--dev @types/express @types/node nodemon ts-node


  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon", // Inicia o servidor no nodemon
    "build": "npx tsc" // Converte de typescript para javaescript
  },

  cria o .gitignore
 
  criar tsconfig.json e cola

  {
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
}

criar o arquivo nodemon.json
{
  "watch": ["src"],
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "ts-node ./src/index.ts"
}

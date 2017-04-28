# Dictionary of Earth

## Installing
The best way to scafolld a project is to fork this repository, and then clone:

```
git clone https://github.com/gladyslim/dictionary-of-earth
mv node-api-stack my-new-server
cd my-new-server
npm install
``` 

## Starting project

You can run server with `npm start` for both production and development reason, but since you need to run the TypeScript watcher separately, please use these instructions for
running project:

### development
`npm run dev` lifts the server up, and watches for typescript change. also since sails auto reload is installed, changes will apply without
needing the server restart.

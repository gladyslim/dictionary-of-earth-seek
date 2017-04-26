# Node API Stack
This is a stable version of sails project, which is prepared for api design instead of a server render project.
Since sails also provides server rendering features, for api endpoint is not suitable and we removed these features from this
project. Although you can try to add them back if you want, and install dependencies like grunt.


## Installing
The best way to scafolld a project is to fork this repository, and then clone:

```
git clone https://github.com/seekinternational/node-api-stack
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
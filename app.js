const yargs  = require('yargs')
const whatToDo = require('./note')

yargs.command({
    command:"add",
    describe:"This will add the note",
    builder:{
        title:{
            describe:"Title of the note",
            demandOption:true,
            type:String
        },
        body:{
            describe:"Body of the note",
            demandOption:true,
            type:String
        }
    },
    handler(argv){
        whatToDo.add(argv.title, argv.body)
    }
})

yargs.command({
    command:"remove",
    describe:"This will remove the note",
    builder:{
        title:{
            describe:"Title of the note",
            demandOption:true,
            type:String
        }
    },
    handler(argv){
        whatToDo.remove(argv.title)
    }
})

yargs.command({
    command:"read",
    describe:"This will read the single note",
    builder:{
        title:{
            describe:"Title of the note",
            demandOption:true,
            type:String
        }
    },
    handler(argv){
        whatToDo.read(argv.title)
    }
})

yargs.command({
    command:"list",
    describe:"This will list the note available",
    handler(){
        whatToDo.list();
    }
})

yargs.parse();
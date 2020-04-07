import { Shell } from './shell';
import { Cpt, showHelp } from "./cpt";

const main = async(): Promise<number> => {

    const argv = process.argv;

    if (argv.length < 3) {
        showHelp();
    }
    else if (argv.length === 3 && (argv[2] === 'help' || argv[2] === '--help')) {
        showHelp();
    }
    else if (argv.length === 4) {

        const shell = new Shell();
        const template = argv[2];
        const path = argv[3];

        const cpt = new Cpt(template, path, shell);
        if(await cpt.validate() === false) {
            return 1;
        }

        cpt.execute();

    } else {
        showHelp();
    }

    return 0;
};

main();


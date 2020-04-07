import { Shell } from './shell';

export class Cpt {

    template: string;
    path: string;
    shell: Shell;

    constructor (template: string, path: string, shell: Shell) {


        this.template = template;
        this.path = path;
        this.shell = shell;

    }

    execute():void {
        // TODO: Add logic to deploy files from templates
        console.log('executed ')
    }

    public validate = async (): Promise<boolean> => {
        if (await this.validateTemplate(this.template) === false) {
            return false;
        }
        if (await this.validatePath(this.path) === false) {
            return false;
        }

        return true;
    };


    private validatePath = async (path: string): Promise<boolean> => {
        try {
            await this.shell.runAsync('ls', '-d', path);
            return true;
        } catch (e) {
            console.log(`Path(${path}) is not valid. Please check specified path is correct.`);
            return false;
        }
    };

    private validateTemplate = async (template: string): Promise<boolean> => {
        try {
            await this.shell.runAsync('ls', '-d', `templates/${template}`);
            return true;
        } catch (e) {
            console.log(`Template(${template}) is not valid. Please check template name is correct.`);
            return false;
        }
    };
}

export const showHelp = (): void => {
    console.log('cpt copy all files from template to target directory');
    console.log('usage: cpt [template-name] [target directory path]');
    console.log('');
    console.log('');
    console.log('EXAMPLES');
    console.log('  The command:');
    console.log('');
    console.log('         cpt sample-typescript-template ./');
    console.log('');
    console.log('  will deploy all files on sample-typescript-template to ./');
    console.log('');
};


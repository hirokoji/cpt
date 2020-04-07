import { exec } from "child_process";
import { promisify } from "util";

const asyncExec = promisify(exec);

export class Shell{

    run(command:string, ...options: string[]):void{

        const cmd = `${command} ${options.join(' ')}`;
        console.log(`cmd: ${cmd}`);
        try {
            exec(cmd);
        } catch (e) {
            throw e;
        }
    }

    async runAsync(command:string, ...options: string[]):Promise<void> {

        const cmd = `${command} ${options.join(' ')}`;
        // console.log(`cmd: ${cmd}`);
        try {
            await asyncExec(cmd);
        } catch (e) {
            throw e;
        }
    }


}

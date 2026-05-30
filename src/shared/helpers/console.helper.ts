import chalk from "chalk";

export function consoleError(message: string)
{
    console.log(chalk.red(message))
}

export function consoleSuccess(message: string)
{
    console.log(chalk.green(message))
}

export function consoleCommon(message: string)
{
    console.log(chalk.white(message))
}
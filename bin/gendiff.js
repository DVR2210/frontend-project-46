#!/usr/bin/env node

import { Command } from 'commander';

import gendiff from '../src/index.js';

const program = new Command();

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format')
  .argument('<fileOne>', 'path to file one')
  .argument('fileTwo', 'path to file two')
  .action((fileOne, fileTwo) => {
    const option = program.opts();
    console.log(gendiff(fileOne, fileTwo, option.format));
  });

program.parse();
#!/usr/bin/env node

import { Command } from 'commander';

import { genDiff } from '../src/index.js';

const program = new Command();

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format')
  .argument('<fileOne>', 'path to file one')
  .argument('fileTwo', 'path to file two')
  .action(fileOne, ileTwo) => {
    console.log(gendiff)
  };

program.parse();


#!/usr/bin/env node

import { Command } from 'commander';
import genDiff from '../src/index.js';

const program = new Command();

program
  .name('genDiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .option('-f ,--format <type>', 'output format', 'stylish')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filePath1, filePath2) => {
    const option = program.opts();
    console.log(genDiff(filePath1, filePath2, option.format));
  });

program.parse();

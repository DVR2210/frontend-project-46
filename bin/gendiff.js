#!/usr/bin/env node

import { program } from 'commander';

const program = new Command();

const command = () => {
    console.log('Hello, World!');
  };
  
  program
    .version('0.0.1')
    .action(command)
    .parse(process.argv);

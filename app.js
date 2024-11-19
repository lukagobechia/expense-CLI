#! /usr/bin/env node
import { Command } from "commander";
import { create } from "./utils/create.js";
import { read } from "./utils/read.js";
import { remove } from "./utils/delete.js";
import { update } from "./utils/update.js";
import { sortByPrice } from "./utils/sortByPrice.js";
import { getById } from "./utils/getById.js";
const program = new Command();

program
  .command("add")
  .description("Creates expense")
  .argument("<category>")
  .argument("<price>")
  .argument("<paymentMethod>")
  .action(async (category, price, paymentMethod) => {
    try {
      await create(category, price, paymentMethod);
    } catch (e) {
      console.log(e.message);
    }
  });

program
  .command("show")
  .description("Shows all expenses")
  .option("--asc", "Sorts in ascending order")
  .option("--desc", "Sorts in descending order")
  .action(async (options) => {
    try {
      await read(options);
    } catch (e) {
      console.log(e.message);
    }
  });

program
  .command("delete")
  .argument("<id>")
  .description("Deletes expense by ID")
  .action(async (id) => {
    try {
      await remove(id);
    } catch (e) {
      console.log(e.message);
    }
  });

program
  .command("update")
  .argument("<id>", "Expense ID to update")
  .option("-uc, --update-category <newCategory>", "Updates category")
  .option("-up, --update-price <newPrice>", "Updates price")
  .option("-upm, --update-payment-method <newPaimentMethod>", "Updates price")
  .description("Updates expense by ID")
  .action(async (id, options) => {
    try {
      await update(id, options);
    } catch (e) {
      console.log(e.message);
    }
  });

program
  .command("price")
  .description("Sorts by prices")
  .option("--asc", "Sorts in ascending order")
  .option("--desc", "Sorts in descending order")
  .action(async (options) => {
    try {
      await sortByPrice(options);
    } catch (e) {
      console.log(e.message);
    }
  });

program
  .command("get")
  .description("Gets expense by ID")
  .argument("<id>", "ID of expense")
  .action(async (id) => {
    try {
      await getById(id);
    } catch (e) {
      console.log(e.message);
    }
  });

program.parse();

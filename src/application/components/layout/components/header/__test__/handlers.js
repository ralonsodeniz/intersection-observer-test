import { rest } from 'msw';
import { categories } from './mocks';

const getCategories = (req, res, ctx) =>
  res(ctx.status(200), ctx.json(categories));

export const handlers = [rest.get('https://swapi.dev/api', getCategories)];

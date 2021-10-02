import { screen } from '@testing-library/react';
import { testIds } from './test-ids';

export const getLogo = () => screen.getByTestId(testIds.logo);

export const getSpinner = () => screen.getByTestId(testIds.spinner);

export const querySpinner = () => screen.queryByTestId(testIds.spinner);

export const findCategories = () => screen.findAllByTestId(testIds.category);

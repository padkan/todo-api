import { Status } from './../enums/Status';
import { body, ValidationChain } from 'express-validator';
import { Priority } from '../enums/Priority';

export const createValidator: ValidationChain[] = [
  body('title')
    .not()
    .isEmpty()
    .withMessage('The task title is mandatory')
    .trim()
    .isString()
    .withMessage('Title needs to be in text format'),
  body('date')
    .not()
    .isEmpty()
    .withMessage('the task date is mandatory')
    .isString()
    .withMessage('the date needs to be a valid date format'),
  body('description')
    .trim()
    .isString()
    .withMessage('Description needs to be in text format'),
  body('priority')
    .trim()
    .isIn([Priority.normal, Priority.high, Priority.low])
    .withMessage('Priority can only be normal , high or low'),
  body('status')
    .trim()
    .isIn([Status.todo, Status.inProgress, Status.completed])
    .withMessage('Status can only be todo , inProgress or completed'),
];

export const updateValidator = [
  body('id')
    .not()
    .isEmpty()
    .withMessage('The task ID is mandatory')
    .trim()
    .isString()
    .withMessage('ID needs to be a validate uui format'),
  body('status')
    .trim()
    .isIn([Status.todo, Status.inProgress, Status.completed])
    .withMessage('Status can only be todo , inProgress or completed'),
];

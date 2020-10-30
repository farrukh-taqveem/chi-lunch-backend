import { User } from '../models/user.model';
import baseController from './base.controller';

export default class userController extends baseController {
    constructor() {
        super(User);
    }
}

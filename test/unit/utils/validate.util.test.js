process.env.NODE_ENV = 'test';

import chai from 'chai';
import { expect } from 'chai';
import { validatePhoneNumber, validateEmail } from '../../../src/utils/validate.util.js';

describe("VALIDATE UTIL TEST", () => {
    describe('validatePhoneNumber', () => {
        it('Should return true with right number', () => {
            const number = "0907872008";
            expect(validatePhoneNumber(number)).to.be.true;
        });
        it('Should return false with wrong number', () => {
            const number = "123";
            expect(validatePhoneNumber(number)).to.be.false;
        });
    });
});
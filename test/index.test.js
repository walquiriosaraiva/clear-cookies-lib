import { expect } from 'chai';
import { clearCookies } from '../src/index.js';

describe('clearCookies', () => {
    it('should be a function', () => {
        expect(clearCookies).to.be.a('function');
    });
});

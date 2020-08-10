import {result} from "../src/romanizer";

describe('transform', () => {
    it('should transform x when give 10', function () {
        const transformed = result(10);
        expect(transformed).toEqual("X");
    })
})
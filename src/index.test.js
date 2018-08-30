import {expect} from 'chai';
import {JSDOM} from 'jsdom';
import fs from 'fs';

describe("Our first test", () => {
    it("Should pass", () => {
        expect(true).to.equal(true);
    });
});

describe("index.html", () => {
    it("Should say Users", (done) => {
        const index = fs.readFileSync("./src/index.html", "utf-8");
        const dom = new JSDOM(index);
        const h1 = dom.window.document.getElementsByTagName('h1')[0];
        expect(h1.innerHTML).to.equal('Users');
        done();
        dom.close();
    });
});

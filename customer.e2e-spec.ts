import { by, browser, element } from "protractor";

describe("Customer App E2E Test Suite", () => {
  describe("customers route page should work fine", () => {
    beforeAll(() => {
        // window.sessionStorage.setItem('user','dummy');
    });

    it("should display customers ", () => {
      browser.get("/customers");
      browser.waitForAngular();
      let customers = element.all(by.css(".card"));
      expect(customers.count()).toBe(6);
    });

    it("should filter", () => {
      browser.get("/customers");
      browser.waitForAngular();
      let searchInput = element(by.id("searchText"));
      searchInput.sendKeys("Geller");

      browser.sleep(1000);
      let customers = element.all(by.css(".card"));
      expect(customers.count()).toBeLessThan(5);
    });
    
  });
});

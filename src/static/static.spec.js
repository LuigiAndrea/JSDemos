describe("Static", function () {

    let Countries = require('./static').Countries;
    let [Country,CountryOldWay] = [Countries.Country,Countries.CountryOldWay];

    it("static es6 with class", function () {
      var country = new Country('Poland', 38000000);
      var country2 = new Country('Ireland', 6500000);
      
      expect(Country.ComparePopulation(country, country2)).toEqual(1);
      expect(country.Population).toEqual(38000000);
    });
  
    it("static before es6", function () {
      var country = new CountryOldWay('Finland', 5510000);
      var country2 = new CountryOldWay('Ireland', 6500000);

      expect(CountryOldWay.ComparePopulation(country, country2)).toEqual(-1);
      expect(country.GetPopulation()).toEqual(5510000);
      expect(country2.GetPopulation()).toEqual(6500000);
    });
  });
  
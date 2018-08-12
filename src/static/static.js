class Country {
    constructor(name, population) {
        this.population = population;
        this.name = name
    }

    GetPopulation() {
        return this.population;
    }

    static ComparePopulation(country1, country2) {
        var r = country1.population - country2.population;
        return (r > 0) ? 1 : (r == 0) ? 0 : -1;
    }
}

function CountryOldWay(name, population) {
    this.name = name;
    this.population = population;
}

CountryOldWay.prototype.GetPopulation = function(){ return this.population }; 

CountryOldWay.ComparePopulation = function (country1, country2) {
    var r = country1.population - country2.population;
    return (r > 0) ? 1 : (r == 0) ? 0 : -1;
}

module.exports = {
    Countries : {
        Country, CountryOldWay
    }
}

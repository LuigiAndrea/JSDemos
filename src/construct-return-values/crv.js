//@param {boolean} r - Just to decide what to return (primitive value or object)
function Cycling(r) {
    helmet = true;
    cyclist = function () {
        return {
            firstname: 'Luigi',
            lastname: 'D\'Aversa'
        }
    }
    bike = "Carbon steel";


    return r ? 15 : horseback
}

var horseback = {
    saddle: true,
    helmet: false,
    stirrup: true
}

module.exports = {
    CRV: {
        Cycling, horseback
    }
}

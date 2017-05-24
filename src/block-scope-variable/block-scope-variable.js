var r = 3;
function task(initialize) {
    if (initialize) {
        var r = 2;
    }
    return r;
}

function tasklet(initialize) {
    if (initialize) {
        let r = 2;
    }
    return r;
}

module.exports = {
    BSV: {
        task, tasklet
    }
}

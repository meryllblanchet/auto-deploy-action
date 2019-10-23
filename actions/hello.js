function main(params) {
    console.log('main called with params:', params)
    return { payload: 'Hello ' + params.name };
}

exports.main = main;


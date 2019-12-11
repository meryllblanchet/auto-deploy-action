function main(params) {
    console.log('main called with params:', params)
    return { payload: 'Good morning ' + params.name };
}

exports.main = main;


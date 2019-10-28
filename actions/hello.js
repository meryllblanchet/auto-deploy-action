function main(params) {
    console.log('main called with params:', params)
    return { payload: 'Hello ' + params.name + ', how are you?' };
}

exports.main = main;


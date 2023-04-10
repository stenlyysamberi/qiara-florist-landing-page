var userFeed = new Instafeed({

    get: 'qiara.floristt',
    target: "instafeed",
    accessToken: 'IGQVJYVUFKcDlPRU40TEhNTjNDYWVNUllZAMjdJZA3c2OHlNb3ZAUSmw2T2N4a3VTODhrQk1URWJreDBmS1JKNzBZANGFzcmRJVlpiR2ZAJV1huY2dFc3JvM3dodXZA2OTFQcG1xMFRLNkVvV21kZAlNDekxHVgZDZD',
    resolution: 'low_resolution',
    limit: 2,
    debug: true,
    sort: false,
    transform: null,
    template : '<div id="instafeed"><img src="{{ image }}" alt=""></div>'

});
userFeed.run();
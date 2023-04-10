var userFeed = new Instafeed({

    get: 'qiara.floristt',
    target: "instafeed",
    accessToken: 'IGQVJYMEIxcTloanNra2VLMHJJTXExWVJ5bkVIWm5CdVJWMTdmdHZADcUVhWE1jY3NWREk0em1IREl4SWNVYkJPbmVpZA3ltSkdzSXJUYkdteC1iUHk1azc1QU00NUFobWxQaWtacFVlem43WWZA6bzVhTwZDZD',
    resolution: 'low_resolution',
    limit: 2,
    debug: true,
    sort: false,
    transform: null,
    template : '<div id="instafeed"><img src="{{ image }}" alt=""></div>'

});
userFeed.run();
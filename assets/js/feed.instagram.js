var userFeed = new Instafeed({

    get: 'qiara.floristt',
    target: "instafeed",
    accessToken: 'IGQVJXcTRWREZAZAMXhaSlRsUjk5WnNQNlhlT3Rhc3ExdnpKQm85VDVER0J1N3V3ZAUdMaWFRNVlYQ3pHOWQ4ZA05EemlaalBSdTlnam9UZA21NaWJmZAXN6S29MSW93TFNyTXdtYWVJeDgxeUg2cTd4U2MxZAwZDZD',
    resolution: 'low_resolution',
    limit: 2,
    debug: true,
    sort: false,
    transform: null,
    template : '<div id="instafeed"><div class="image"><img src="{{ image }}" alt=""></div></div>'

});
userFeed.run();
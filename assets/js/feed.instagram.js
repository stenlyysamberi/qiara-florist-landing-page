var userFeed = new Instafeed({

    get: 'qiara.floristt',
    target: "instafeed",
    accessToken: 'IGQVJYdy1xdG45OTZA1akwzaWtTd2xLU0NrVVNWek5BaGFDSVI3b0V0SkFRVGdPaVlLampKN09vTXhsaXVQY1Q3VkdnYVFsV19ZAN05iRU92a25RRkpkdERjbk1pRC1kMWpmbDBrX2R1WUhWOU90R2JuNwZDZD',
    resolution: 'low_resolution',
    limit: 2,
    debug: true,
    sort: false,
    transform: null,
    template : '<div id="instafeed"><img src="{{ image }}" alt=""></div>'

});
userFeed.run();
var userFeed = new Instafeed({

    get: 'qiara.floristt',
    target: "instafeed",
    accessToken: 'IGQVJYdGRMdzRUcFo5LU5Rc0lOS0tfZAW93aHotWW02MkJKYzBZAVEhMdmdSaUFjMHNEbDJRa0lYdS1GY0ZALa3hleERZAMy1wMTV0VFdkZAzVqMjB0eXhXdGg4WXJyTDlIeWpJdXlYSGpIb0dSSVdsNlhDdQZDZD',
    resolution: 'low_resolution',
    limit: 2,
    debug: true,
    sort: false,
    transform: null,
    template : '<div id="instafeed"><img src="{{ image }}" alt=""></div>'

});
userFeed.run();
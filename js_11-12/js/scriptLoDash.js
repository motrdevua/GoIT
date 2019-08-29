$(function () {
    var $html = $('#profile').html();
    var tmpl = _.template($html);
    console.log(tmpl);
    var data = {
            name: 'Лукашев Игорь Сергеевич',
            photo: '<img src="img/avatar.png" alt="avatar" title="avatar">',
            studentOf: 'Студент GoIT',
            wishlistTitle:'Хочу учить фронтенд, потому что:',
            wishWhyFirst: 'Хочу начать жизнь "с чистого листа"',
            wishWhySecond: 'Работа должна приносить удовольствие',
            wishWhyThird: 'Хочу воплотить свои идеи в жизнь',
            contactsTitle: 'Контакты',
            contactFirstTitle: 'Мой контактный телефон:',
            contactFirst: '+380958150031',
            contactSecondTitle: 'Мой профиль на фейсбук:',
            contactSecond: '<a href="https://www.facebook.com/manontherunmusic" target="_blank">facebook.com</a>',
            feedTitle: 'Мой фидбек:',
            feed: 'Могу написать трек, сделать ремикс'
        };
    $('body').append(tmpl(data));
});

describe('Проверка форма Логин и Пароль', function () {

     it('Верный логин,пароль', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('введите свой логин');
        cy.get('.auth-form > form > [type="password"]').type('введите свой пароль');
        cy.get('.auth-form__submit').click();
        cy.contains('Коллекции')

        })


})

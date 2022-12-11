describe('Проверка формы Логин и Пароль', function () {

     it('Позитивный кейс:верный логин и пароль', function () {
        cy.visit('https://www.citilink.ru/');
        cy.get('.AuthPopup__button > .Link > .HeaderMenu__button').click();
        cy.get('.SignIn__login > .InputBox > .InputBox__container > .InputBox__input').type('введите свой емайл');
        cy.get('.SignIn__password > .InputBox > .InputBox__container > .InputBox__input').type('введите свой пароль');
        cy.get('.SignIn__button').click();

        })

     it('Негативный кейс:верный логин и неверный пароль', function () {
     	cy.reload()
        cy.visit('https://www.citilink.ru/');
        cy.get('.AuthPopup__button > .Link > .HeaderMenu__button').click();
        cy.get('.SignIn__login > .InputBox > .InputBox__container > .InputBox__input').type('введите свой емайл');
        cy.get('.SignIn__password > .InputBox > .InputBox__container > .InputBox__input').type('введите свой пароль с ошибкой');
        cy.get('.SignIn__button').click();

        cy.contains('Неверный логин или пароль')

        })

 






})

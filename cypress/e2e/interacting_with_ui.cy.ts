describe('Album Catalog - Interactions', () => {
    it('looks for songs when searching via search bar', () => {
        cy.visit("/");
        
        //clicking on search
        cy.get('[data-cy="navbar"]')
            .get('[data-cy="navbarSearchLink"]').click();
        
        cy.url().should('eq',`http://localhost:3000/search`);
    });

    it('navigates to the first album detail', () => {
        cy.visit("/");

        cy.get('[data-cy="albumCardsDiv"]')
            .children('[data-cy="albumCard"]')
            .children('[data-cy="albumCardBody"]')
            .get('[data-cy="AlbumCardDetailLinkDiv"]')
            .get('[data-cy="AlbumCardDetailLink1"]').click();

        cy.url().should('eq',`http://localhost:3000/album/1`);

    });

    it('navigates to home page after clicking on Spotify logo', () => {
        cy.visit("/album/1");

        cy.get('[data-cy="navbar"]')
            .children('[data-cy="navbarTitleDiv"]')
            .children('[data-cy="navbarTitle"]')
            .should('contain.text', 'Spotify').click();
        
        cy.url().should('eq',`http://localhost:3000/`);

    });

    // add at least 3 more tests here

    it('after clicking on first author"s name display his detail', () => {
        cy.visit("/");
        
        cy.get('[data-cy="albumCardsDiv"]')
            .get('[data-cy="AlbumCardAuthorLink1"]').click();
        
        cy.url().should('eq',`http://localhost:3000/author/1`);
    });

    it('clicking on input activate the input', () => {
        cy.visit("/");

        cy.get('[data-cy="navbar"]')
            .get('[data-cy="navbarInput"]').click();

        cy.get('[data-cy="navbar"]')
            .get('[data-cy="navbarInput"]').should('be.focused');
    

    });

    it('clicking spoticy title on main page refreshes the page', () => {
        cy.visit("/");

        cy.get('[data-cy="navbar"]')
            .children('[data-cy="navbarTitleDiv"]')
            .children('[data-cy="navbarTitle"]')
            .should('contain.text', 'Spotify').click();
        
        cy.url().should('eq',`http://localhost:3000/`);

    });
});

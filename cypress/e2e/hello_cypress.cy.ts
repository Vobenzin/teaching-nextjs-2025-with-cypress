describe('Album Catalog - Basic Checks', () => {
  it('opens the homepage', () => {
    cy.visit('/');

    // make this test pass by adding the correct attribute data-cy into your page
    cy.get('[data-cy="title"]').should('be.visible');
    cy.get('[data-cy="title"]').should('contain.text', 'Spotify');
  });

  it('displays the site title in the header', () => {
    cy.visit('/')

    cy.get('header').children('[data-cy="title"]');
  });

  it('shows at least one album card', () => {
    cy.visit('/');

    cy.get('[data-cy="albumCardsDiv"]').children().should('have.length.at.least',1);
  });

  it('album card has a title and price', () => {
    cy.visit('/');

    cy.get('[data-cy="albumCardsDiv"]').children('[data-cy="albumCard"]').children('[data-cy="albumCardBody"]').children('[data-cy="albumCardTitle"]')
    cy.get('[data-cy="albumCardsDiv"]').children('[data-cy="albumCard"]').children('[data-cy="albumCardBody"]').children('[data-cy="albumCardPrice"]')
  });

  it('has a visible search input on the top', () => {
    cy.visit('/');

    cy.get('[data-cy="navbar"]').get('[data-cy="navbarInput"]').should('be.visible');
  });

  // add at least 3 more tests here
  it('displays the title in the navbar on the top ', () => {
    cy.visit('/');

    cy.get('[data-cy="navbar"]').children('[data-cy="navbarTitleDiv"]').children('[data-cy="navbarTitle"]').should('contain.text', 'Spotify');
  })

  it('displays pop sticker on each album card', () => {
    cy.visit('/');

    cy.get('[data-cy="albumCardsDiv"]').children('[data-cy="albumCard"]').children('[data-cy="albumCardBody"]').get('[data-cy="albumCardPopSticker"]').should('contain.text', 'Pop');
  })

  it('each album card has a Detail Link button', () => {
    cy.visit('/');

    cy.get('[data-cy="albumCardsDiv"]').children('[data-cy="albumCard"]').children('[data-cy="albumCardBody"]').get('[data-cy="AlbumCardDetailLinkDiv"]').get('[data-cy="AlbumCardDetailLink1"]')
  })
});

describe('IT2 Cypress Testleri - Teknolojik Yemekler', () => {

  beforeEach(() => {
    cy.visit('/form');
  });

  it('Header ve breadcrumb görünür olmalı', () => {
    cy.get('header').should('be.visible');
    cy.get('header h1')
      .should('be.visible')
      .and('contain.text', 'Teknolojik Yemekler');

    cy.get('.breadcrumb')
      .should('be.visible')
      .and('contain.text', 'Anasayfa / Sipariş Oluştur');
  });

  it('Form inputları ve seçimler doğru şekilde çalışmalı', () => {
    cy.get('input[name="isim"]').type('Gülsüm').should('have.value', 'Gülsüm');
    cy.get('input[name="boyut"]').first().check().should('be.checked');
    cy.get('input[name="malzeme"]').eq(0).check().should('be.checked');
    cy.get('input[name="malzeme"]').eq(1).check().should('be.checked');
    cy.get('textarea[name="ozel"]').type('Lütfen ekstra peynir ekleyin').should('have.value', 'Lütfen ekstra peynir ekleyin');
  });
  it('Form submit edildiğinde veriler onay sayfasına geçmeli', () => {
    cy.intercept('POST', 'https://reqres.in/api/pizza', {
      statusCode: 201,
      body: {
        id: 101,
        isim: 'Gülsüm',
        boyut: 'Küçük',
        malzemeler: ['Peynir', 'Sucuk'],
        ozel: 'Lütfen ekstra peynir ekleyin'
      }
    }).as('postSiparis');
    cy.get('input[name="isim"]').type('Gülsüm');
    cy.get('input[name="boyut"]').first().check();
    cy.get('select[name="hamur"]').select('İnce'); // 
    cy.get('input[name="malzeme"]').eq(0).check();
    cy.get('input[name="malzeme"]').eq(1).check();
    cy.get('textarea[name="ozel"]').type('Lütfen ekstra peynir ekleyin');
    cy.get('button[type="submit"]').click();
    cy.wait('@postSiparis').its('response.statusCode').should('eq', 201);
    cy.url().should('include', '/siparis-onayi');
     cy.get('.success-message')
    .should('contain.text', 'TEBRİKLER! SİPARİŞİNİZ ALINDI!');
});
  });

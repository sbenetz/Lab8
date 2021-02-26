describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5501/Part2-Cypress/index.html');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number');
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider')
    .then( function($el) {
      expect($el).to.have.value(75);
    } );
  });

  it('Input changes when volume slider changes', () => {
    cy.get('#volume-slider')
    .invoke('val', 33)
    .trigger('input');
    cy.get('#volume-number')
    .then( function($el) {
      expect($el).to.have.value(33);
    } );
  });

  it('Audio element changes when volume slider changes', () => {
    cy.get('#volume-slider')
    .invoke('val', 33)
    .trigger('input');
    cy.get('#horn-sound')
    .then( function($el) {
      expect($el).to.have.prop('volume',0.33);
    } );
  });
  it('image and sound sources change on select the party horn radio button', () => {
    cy.get('#radio-party-horn')
    .check();
    cy.get('#horn-sound')
    .then( function($el) {
      expect($el).to.have.attr('src','./assets/media/audio/party-horn.mp3');
    } );
    cy.get('#sound-image')
    .then( function($el) {
      expect($el).to.have.attr('src','./assets/media/images/party-horn.svg');
    } );
  });

  it('volume image changes when increasing volumes', () => {
    cy.get('#volume-slider')
    .invoke('val', 0)
    .trigger('input');
    cy.get('#volume-image')
    .then( function($el) {
      expect($el).to.have.attr('src','./assets/media/icons/volume-level-0.svg');
    } );
    cy.get('#volume-slider')
    .invoke('val', 12)
    .trigger('input');
    cy.get('#volume-image')
    .then( function($el) {
      expect($el).to.have.attr('src','./assets/media/icons/volume-level-1.svg');
    } );
    cy.get('#volume-slider')
    .invoke('val', 45)
    .trigger('input');
    cy.get('#volume-image')
    .then( function($el) {
      expect($el).to.have.attr('src','./assets/media/icons/volume-level-2.svg');
    } );
    cy.get('#volume-slider')
    .invoke('val', 88)
    .trigger('input');
    cy.get('#volume-image')
    .then( function($el) {
      expect($el).to.have.attr('src','./assets/media/icons/volume-level-3.svg');
    } );
  });

  it('honk button is disabled when the textbox input is a empty or a non-number', () => {
    cy.get('#volume-number')
    .invoke('val', 'a')
    .trigger('input');
    cy.get('#honk-btn')
    .then( function($el) {
      expect($el).to.have.prop('disabled', true);
    } );
    cy.get('#volume-number')
    .invoke('val', '')
    .trigger('input');
    cy.get('#honk-btn')
    .then( function($el) {
      expect($el).to.have.prop('disabled', true);
    } );
  });

  it('error is shown when you type a number outside of the given range for the volume textbox input', () => {
    cy.get('#volume-number')
    .invoke('val', '-1')
    .trigger('input');
    cy.get('#volume-number')
    .then( function($el) {
      expect($el).to.match(':invalid')
    } );
    cy.get('#volume-number')
    .invoke('val', '101')
    .trigger('input');
    cy.get('#volume-number')
    .then( function($el) {
      expect($el).to.match(':invalid')
    } );
  });
});

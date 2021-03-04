Feature('Expo');

Scenario('KPR',  (I) => {
  expo(I, '/kpr/booth/ciputra/citraland-tallasa-city')
});



function expo(I, expo) {
    // browser.waitForAngularEnabled(false);

    I.amOnPage(expo);
    
    I.wait(5);
}

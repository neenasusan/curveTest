describe('angularjs homepage Payne Dentistry App', function() {
  it('should get the schedule page', function() {

    browser.get('http://localhost:4200');
    expect(browser.getTitle()).toEqual('Payne Dentistry');
	expect(browser.findElement(by.className('navbar-brand')).getText()).toBe('Payne DDS');  
  });


it('should go to the schedule page', function() {
    browser.get('http://localhost:4200/schedule');


     


     var a= new Date('08/15/2018');
     var month = new Array();
            month[0] = "January";
            month[1] = "February";
            month[2] = "March";
            month[3] = "April";
            month[4] = "May";
            month[5] = "June";
            month[6] = "July";
            month[7] = "August";
            month[8] = "September";
            month[9] = "October";
            month[10] = "November";
            month[11] = "December";
     var dd= month[a.getMonth()];
     
     
     var to = 'Schedule - '+dd+' 15, 2018';
    expect(browser.findElement(by.css('span.title')).getText()).toBe(to);

    browser.sleep(6000);  
            
    expect(browser.getTitle()).toEqual('Payne Dentistry');
  });

it('should go to the patients list page and schedule an appointment', function() {
    browser.get('http://localhost:4200/patients');
    expect(browser.findElement(by.tagName('h3')).getText()).toBe('Patient List');
    element.all(by.className('card-title')).first().click();
    element(by.cssContainingText("a","Schedule Appointment")).getAttribute('href').click();
    expect(browser.findElement(by.tagName('h3')).getText()).toBe('Appointment');


    var date= element(by.id('date'));
    date.sendKeys(protractor.Key.DELETE);
    date.sendKeys('2018');
    date.sendKeys(protractor.Key.ARROW_RIGHT);
    date.sendKeys(protractor.Key.DELETE);
    date.sendKeys('02');
    date.sendKeys(protractor.Key.DELETE);
  	date.sendKeys('06');
    

    var time = element(by.id('time'));
    time.sendKeys(protractor.Key.DELETE);
    time.sendKeys('13');
    time.sendKeys(protractor.Key.ARROW_RIGHT);
    time.sendKeys('08');


    var duration=element(by.css('[name="duration"]')).click().sendKeys(protractor.Key.BACK_SPACE);
    duration.sendKeys(protractor.Key.BACK_SPACE);
    duration.sendKeys('20');
    


    element(by.buttonText('Cancel')).click();
    //element(by.buttonText('Save')).click();
    expect(browser.getCurrentUrl()).toContain('http://localhost:4200/schedule');

  });


it('should go to the schedule page', function() {
    browser.get('http://localhost:4200/schedule');
    expect(browser.getTitle()).toEqual('Payne Dentistry');
  });

});
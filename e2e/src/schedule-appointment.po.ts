import { browser, by, element } from 'protractor';

export class ScheduleAppointmentPage{
	
	async navigateTo() {
    	return browser.get(`/patients`);
    }

	async selectPatientByName(firstName, lastName) {
    	await element(by.cssContainingText('drp-patient-thumbnail .card-title', `${lastName}, ${firstName}`)).click();
  	}

  	async navigateToScheduleAppointment() {
    	await element(by.cssContainingText("a","Schedule Appointment")).getAttribute('href').click();
  	}

 	async setDate(value1,value2,value3) {
    	var date = element(by.id('date'));
    	date.sendKeys(protractor.Key.DELETE);
    	await date.sendKeys(value1);
    	date.sendKeys(protractor.Key.ARROW_RIGHT);
    	await date.sendKeys(value2);
    	await date.sendKeys(value3);  
  	}

   	async setTime(value1,value2) {
    	var time = element(by.id('time'));
    	time.sendKeys(protractor.Key.DELETE);
    	await time.sendKeys(value1);
    	await time.sendKeys(value2); 
  	}

  	async setDuration(value) {
    	var duration=element(by.css('[name="duration"]')).click().sendKeys(protractor.Key.BACK_SPACE);
    	duration.sendKeys(protractor.Key.BACK_SPACE);
    	await duration.sendKeys(value);  
 	}

	async submitForm() {
    	await element(by.css('button[type="submit"]')).click();
  	}

	async navigateToSchedulePage(value) {
    	return browser.get(`/schedule/${value}`);	
    }

	async selectAppointment() {
    	await element(by.className('col-3 col-md-5 time')).click();
    	return await browser.findElement(by.tagName('h3')).getText();
    	await element(by.buttonText('Cancel')).click();
  	}
}

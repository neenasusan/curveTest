import { AppPage } from './app.po';
import * as moment from 'moment';
import { PatientListPage } from './patient-list.po';
// import { PatientDetailPage } from './patient-detail.po';
import { ScheduleAppointmentPage} from './schedule-appointment.po';

describe('Payne Dentistry App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it(`should start by displaying today's schedule`, () => {
    page.navigateTo();

    const paragraphText = page.getParagraphText();
    expect(paragraphText).toContain('Schedule');
    expect(paragraphText).toContain(moment().format('LL'));
  });
});

describe('Patient management', () => {
  const firstName = 'Jeremy';
  const lastName = 'Burnett';
  const duration = '30';
  const year = '2018';
  const month = '12';
  const date = '04';
  const day = year+'-'+month+'-'+date;


  const hour = '11';
  const minute = '30';
  


  
  let listPage: PatientListPage;
  let schedulePage: ScheduleAppointmentPage;
  
  beforeEach(() => {
    
    listPage = new PatientListPage();
    schedulePage = new ScheduleAppointmentPage();

  });



it('should list the patients list and select a patient', async () => {

    await schedulePage.navigateTo();

    await schedulePage.selectPatientByName(firstName, lastName);
    await schedulePage.navigateToScheduleAppointment();
    await schedulePage.setDate(year,month,date);

    await schedulePage.setTime(hour,minute);
    await schedulePage.setDuration(duration);
    await schedulePage.submitForm();
    await schedulePage.navigateToschedule(day);
    await schedulePage.selectAppointment();

    const title = schedulePage.selectAppointment();
    expect(title).toContain('Appointment');


    browser.sleep(6000);
    
    
  });









});

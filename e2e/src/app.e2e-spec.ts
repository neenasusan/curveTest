import { AppPage } from './app.po';
import * as moment from 'moment';
import { CreatePatientPage } from './create-patient.po';
import { PatientListPage } from './patient-list.po';
import { PatientDetailPage } from './patient-detail.po';
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
const name = lastName+', '+firstName;

  const year = '2018';
  const month = '08';
  const date = '18';
  const day = year+'-'+month+'-'+date;

  const hour = '11';
  const minute = '30';

  const duration = '30';

  let createPage: CreatePatientPage;
  let listPage: PatientListPage;
  let detailPage: PatientDetailPage;
  let schedulePage: ScheduleAppointmentPage;

  beforeEach(() => {
    createPage = new CreatePatientPage();
    listPage = new PatientListPage();
    detailPage = new PatientDetailPage();
    schedulePage = new ScheduleAppointmentPage();  
  });

  it('should create a new patient', async () => {
    await createPage.navigateTo();
    await createPage.setFirstName(firstName);
    await createPage.setLastName(lastName);
    await createPage.setBirthDate('1996-04-07');
    await createPage.submitForm();
  });

  it('should list the newly created patient', async () => {
    await listPage.navigateTo();
    await listPage.selectPatientByName(firstName, lastName);
  });

it('should show details of clicked patient', async () => {
    const patientName = await detailPage.getTitleText();
    expect(patientName).toBe(`${lastName}, ${firstName}`);
  });

it('should select the patient from Patients List', async () => {
    await schedulePage.navigateTo();
    await schedulePage.selectPatientByName(firstName, lastName);
    });

it('should create a new Appointment for the selected patient', async () => {
    await schedulePage.navigateToScheduleAppointment();
    await schedulePage.setDate(year,month,date);
    await schedulePage.setTime(hour,minute);
    await schedulePage.setDuration(duration);
    await schedulePage.submitForm();
 });

 it('should show the appointment on the appropriate day', async () => {   
    await schedulePage.navigateToSchedulePage(day);
    await schedulePage.checkForCandidate();
    const title = schedulePage.checkForCandidate();
    expect(title).toContain(name);
    await schedulePage.navigateTo();
    browser.sleep(6000); 
  });

});

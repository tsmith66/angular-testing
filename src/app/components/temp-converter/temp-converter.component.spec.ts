import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FixtureElementUtils } from 'src/app/testing-utils/utils';
import { TempConverterService } from 'src/services/temp-converter.services';

import { TempConverterComponent } from './temp-converter.component';

describe('TempConverterComponent', () => {
  let component: TempConverterComponent;
  let fixture: ComponentFixture<TempConverterComponent>;
  let serviceFake: jasmine.SpyObj<TempConverterService>;

  beforeEach(async () => {
    serviceFake = jasmine.createSpyObj('TempConverterService', ['convertToC']);
    await TestBed.configureTestingModule({
      declarations: [TempConverterComponent],
      providers: [{
        provide: TempConverterService, useValue: serviceFake
      }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempConverterComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('interaction 1', () => {
    serviceFake.convertToC.and.returnValue(999);
    const fixtureElementUtils = new FixtureElementUtils(fixture.debugElement);
    const tempInput = fixtureElementUtils.getNativeElement<HTMLInputElement>('[data-temp-converter-entry]');
    tempInput.value = '412';

    // fixture.detectChanges();

    const convertButton = fixtureElementUtils.getNativeElement<HTMLButtonElement>('[data-temp-converter-convert-button]');
    convertButton.click();

    // fixture.detectChanges();

    const resultSpan = fixtureElementUtils.getNativeElement<HTMLSpanElement>('[data-temp-converter-result]');
    expect(resultSpan.innerText).toEqual('412 is 999 Celsius');
  });

  it('should round in the template', () => {
    serviceFake.convertToC.and.returnValue(0.55555);
    const fixtureElementUtils = new FixtureElementUtils(fixture.debugElement);
    const tempInput = fixtureElementUtils.getNativeElement<HTMLInputElement>('[data-temp-converter-entry]');
    tempInput.value = '412';

    const convertButton = fixtureElementUtils.getNativeElement<HTMLButtonElement>('[data-temp-converter-convert-button]');
    convertButton.click();

    const resultSpan = fixtureElementUtils.getNativeElement<HTMLSpanElement>('[data-temp-converter-result]');
    expect(resultSpan.innerText).toEqual('412 is 0.56 Celsius');
  });
});

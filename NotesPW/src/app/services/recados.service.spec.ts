import { TestBed } from '@angular/core/testing';

import { RecadosService } from './recados.service';

describe('RecadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecadosService = TestBed.get(RecadosService);
    expect(service).toBeTruthy();
  });
});

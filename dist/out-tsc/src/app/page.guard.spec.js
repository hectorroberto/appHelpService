import { TestBed, inject } from '@angular/core/testing';
import { PageGuard } from './page.guard';
describe('PageGuard', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [PageGuard]
        });
    });
    it('should ...', inject([PageGuard], function (guard) {
        expect(guard).toBeTruthy();
    }));
});
//# sourceMappingURL=page.guard.spec.js.map
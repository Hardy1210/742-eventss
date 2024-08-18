import { getMonth } from './index'

describe("Date helper", () => {
    describe("When getMonth is called", () => {
        it("The function return 'janvier' for 2022-01-01 as date", () => {
            const date = new Date("2022-01-01");
            const month = getMonth(date);
            expect(month).toBe("janvier");
        });

        it("The function returns 'février' for 2022-02-08 as date", () => {
            const date = new Date("2022-02-08");
            const month = getMonth(date);
            expect(month).toBe("février");
        });

        // Ajoutez d'autres tests si nécessaire
        it("The function returns 'mars' for 2022-03-25 as date", () => {
            const date = new Date("2022-03-25");
            const month = getMonth(date);
            expect(month).toBe("mars");
        });

        it("The function returns 'avril' for 2022-04-25 as date", () => {
            const date = new Date("2022-04-25");
            const month = getMonth(date);
            expect(month).toBe("avril");
        });

        it("The function returns 'mai' for 2022-05-01 as a date", () => {
            const date = new Date("2022-05-01");
            const month = getMonth(date);
            expect(month).toBe("mai");
        });
    
        it("The function returns 'juin' for 2022-06-01 as a date", () => {
            const date = new Date("2022-06-01");
            const month = getMonth(date);
            expect(month).toBe("juin");
        });
    
        it("The function returns 'juillet' for 2022-07-01 as a date", () => {
            const date = new Date("2022-07-01");
            const month = getMonth(date);
            expect(month).toBe("juillet");
        });
    
        it("The function returns 'août' for 2022-08-01 as a date", () => {
            const date = new Date("2022-08-01");
            const month = getMonth(date);
            expect(month).toBe("août");
        });
    
        it("The function returns 'septembre' for 2022-09-01 as a date", () => {
            const date = new Date("2022-09-01");
            const month = getMonth(date);
            expect(month).toBe("septembre");
        });
    
        it("The function returns 'octobre' for 2022-10-01 as a date", () => {
            const date = new Date("2022-10-01");
            const month = getMonth(date);
            expect(month).toBe("octobre");
        });
    
        it("The function returns 'novembre' for 2022-11-01 as a date", () => {
            const date = new Date("2022-11-01");
            const month = getMonth(date);
            expect(month).toBe("novembre");
        });
    
        it("The function returns 'décembre' for 2022-12-01 as a date", () => {
            const date = new Date("2022-12-01");
            const month = getMonth(date);
            expect(month).toBe("décembre");
        });
    });
});



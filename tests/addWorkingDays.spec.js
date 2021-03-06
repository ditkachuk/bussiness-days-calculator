const { addWorkingDays } = require('../src/index');

test('should add year before', () => {
    const result = addWorkingDays(new Date('2018-12-31'), 1);

    expect(result).toEqual(new Date('2019-01-10'));
});

test('should add before long weekend', () => {
    const result = addWorkingDays(new Date('2019-04-30'), 1);

    expect(result).toEqual(new Date('2019-05-06'));
});

test('should add with casual weekend', () => {
    const result = addWorkingDays(new Date('2019-02-08'), 1);

    expect(result).toEqual(new Date('2019-02-11'));
});

test('should add without weekend', () => {
    const result = addWorkingDays(new Date('2019-05-22'), 1);

    expect(result).toEqual(new Date('2019-05-23'));
});

test('should add long period', () => {
    const result = addWorkingDays(new Date('2019-04-30'), 4);

    expect(result).toEqual(new Date('2019-05-13'));
});

test('should add reverse weekend', () => {
    const result = addWorkingDays(new Date('2019-05-06'), -1);

    expect(result).toEqual(new Date('2019-04-30'));
});

test('should throw error', () => {
    const result = addWorkingDays('', 1);

    expect(result.getTime()).toBeNaN();
});

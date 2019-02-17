let a = 'first';

function scopeTest(params) {
    console.log(a);
    a = 'changed';
    let b = 'second';
    if (a != '') {
        console.log(a);
    }
}
scopeTest();
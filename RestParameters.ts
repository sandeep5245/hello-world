function iTakeItAll(first, second, ...allOthers) {
    allOthers.push("new");
    console.log(allOthers);
}
iTakeItAll('foo', 'bar'); // []
iTakeItAll('foo', 'bar', 'bas', 'qux'); // ['bas','qux']
const thesis = { name: "Church", date: 1936 };

function renameThesis(oldThesis, newName) {
    return { name: newName, date: oldThesis.date };
}

const thesis2 = renameThesis(thesis, 'Church-Turing');
thesis;
thesis2;
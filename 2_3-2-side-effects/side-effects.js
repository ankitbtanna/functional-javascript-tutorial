let thesis = { name: "Church", date: 1936 };

function renameThesis(newName) {
    thesis.name = newName;
    console.log("Renamed");
}

renameThesis('Church-Turing');
thesis;
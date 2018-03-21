

function refresh() {
    var textArea = document.getElementById("logEntries");
    var out = document.getElementById("detail");

    out.value = "";
 
    var newSource = textArea.value;   

    a = newSource.split(/\n/);
    for (i = 0; i< a.length; i++) {
        s = rework(a[i]);
        out.value += s;
        out.value +="\n";
    }
}

function rework(s) {
    s = s.replace(/^.*] /, "");
    s = s.replace(/\./g, "\\.");
    s = s.replace(/\*/g, "\\*");
    s = s.replace(/-?\d+/g, "-?\\d+");
    s = s.replace(/\(/g, "\\(");
    s = s.replace(/\)/g, "\\)");
    s += "$";
    return s;
}
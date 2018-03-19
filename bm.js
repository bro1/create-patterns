

function refresh() {
    var textArea = document.getElementById("logEntries");
    var out = document.getElementById("detail");
    out.innerHTML = "";


    var newSource = textArea.value;    

    a = newSource.split(/\n/);
    for (i = 0; i< a.length; i++) {

        s = rework(a[i]);
        out.innerHTML += s;
        out.innerHTML +=" <br/>";
    }

}

function rework(s) {
    s = s.replace(//, "")
    s = s.replace(/\d+/, "\\d+");
    s = s.replace(/\(/, "\\(");
    s = s.replace(/\)/, "\\)");
    
    s += "$";
    return s;
}
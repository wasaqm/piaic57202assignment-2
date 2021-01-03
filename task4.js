var obt = prompt("Please enter Obtained Marks");
var tot = prompt("Please enter Total Marks");
var prc = (obt/tot)*100;
if (prc >= 80) {
    document.write("Total Marks: " + tot + "<br>")
    document.write("Obtained Marks: " + obt + "<br>")
    document.write("Percentage: " + prc + "<br>")
    document.write("Grade: A-one" + "<br>")
    document.write("Remarks: Excellent" + "<br>")

}
if (prc >= 70) {
    document.write("Total Marks: " + tot + "<br>")
    document.write("Obtained Marks: " + obt + "<br>")
    document.write("Percentage: " + prc + "<br>")
    document.write("Grade: A" + "<br>")
    document.write("Remarks: Good" + "<br>")

}

if (prc >= 60) {
    document.write("Total Marks: " + tot + "<br>")
    document.write("Obtained Marks: " + obt + "<br>")
    document.write("Percentage: " + prc + "<br>")
    document.write("Grade: B" + "<br>")
    document.write("Remarks: You need to improve" + "<br>")
}
if (prc < 60) {
    document.write("Total Marks: " + tot + "<br>")
    document.write("Obtained Marks: " + obt + "<br>")
    document.write("Percentage: " + prc + "<br>")
    document.write("Grade: Fail" + "<br>")
    document.write("Remarks: Sorry" + "<br>")

}